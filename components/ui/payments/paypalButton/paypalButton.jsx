import {
  addPaymentMethodToOrder,
  getCart,
} from "@/lib/operations/operations-woocommerce";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
  getScriptID,
  destroySDKScript,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const SCRIPT_PROVIDER_OPTIONS = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "CAD",
  intent: "capture",
};
const LoadScriptButton = () => {
  const [{ isResolved }, dispatch] = usePayPalScriptReducer();

  return (
    <div className="inline-flex">
      <button
        type="button"
        className="block mb-6"
        disabled={isResolved}
        onClick={() => {
          dispatch({
            type: "setLoadingStatus",
            value: "pending",
          });
        }}
      >
        Load PayPal script
      </button>
      <button
        type="button"
        style={{
          display: "block",
          marginBottom: "20px",
          marginLeft: "1em",
        }}
        onClick={() => {
          destroySDKScript(getScriptID(SCRIPT_PROVIDER_OPTIONS));
          dispatch({
            type: "setLoadingStatus",
            value: "initial",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};

function PrintLoadingState() {
  const [{ isInitial, isPending, isResolved, isRejected }] =
    usePayPalScriptReducer();
  let status = "no status";

  if (isInitial) {
    status = "initial";
  } else if (isPending) {
    status = "pending";
  } else if (isResolved) {
    status = "resolved";
  } else if (isRejected) {
    status = "rejected";
  }

  return <div>Current status: {status}</div>;
}

const PayPalButton = ({ cart, id, setCart, setOrderId, currentRate }) => {
  const router = useRouter();

  const wooCreatePayment = async (order_id, paypal_order_id) => {
    if (paypal_order_id) {
      try {
        const response = await addPaymentMethodToOrder(
          order_id,
          paypal_order_id
        );

        if (!response.success) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        const oldId = order_id;
        const newCart = await getCart();
        setOrderId(newCart.data.id);
        setCart(newCart.data);
        localStorage.setItem(
          "woocommerce-cart-order-id",
          JSON.stringify(newCart.data.id)
        );
        router.push({
          pathname: `/thanks-for-ordering-from-cdi-furlers`,
          query: { order_id: oldId },
        });
      } catch (err) {
        console.error(err);
        alert(
          "We can't submit the form, please review your answers and try again."
        );
      }
    }
  };

  const paypalCreateOrder = async () => {
    try {
      const total = (currentRate.rate * Number(cart.total)).toFixed(2);
      let response = await fetch(
        process.env.NODE_ENV === "production"
          ? // ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/wc/store/order/paypal/create-order`
            `/api/wc/store/order/paypal/create-order`
          : "http://localhost:3000/api/wc/store/order/paypal/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart.line_items,
            user_id: cart.id,
            order_price: total,
            currency: currentRate.code,
          }),
        }
      )
        .then((response) => response.json())
        .then((order) => {
          return order;
        });
      return response.data.id;
    } catch (err) {
      console.log(err);
      // Your custom code to show an error like showing a toast:
      // toast.error('Some Error Occured')
      return null;
    }
  };

  const paypalCaptureOrder = async (orderID) => {
    try {
      let response = await axios.post(
        process.env.NODE_ENV === "production"
          ? // ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/wc/store/order/paypal/capture-order`
            `/api/wc/store/order/paypal/capture-order`
          : "http://localhost:3000/api/wc/store/order/paypal/capture-order",
        {
          orderID,
        }
      );
      if (response.data.success) {
        return response.data;
        // Order is successful
        // Your custom code
        // Like showing a success toast:
        // toast.success('Amount Added to Wallet')
        // And/Or Adding Balance to Redux Wallet
        // dispatch(setWalletBalance({ balance: response.data.data.wallet.balance }))
      }
    } catch (err) {
      console.log(err);
      // Order is not successful
      // Your custom code
      // Like showing an error toast
      // toast.error('Some Error Occured')
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: currentRate ? currentRate.code : "USD",
        intent: "capture",
      }}
    >
      {/* <LoadScriptButton /> */}
      {/* <PrintLoadingState /> */}
      <PayPalButtons
        style={{
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 50,
        }}
        fundingSource={undefined}
        onCancel={(data) => {
          console.log(`order cancelled: ${data.orderID}`);
        }}
        onError={(err) => {
          console.log(err);
        }}
        createOrder={async (data, actions) => {
          let order_id = await paypalCreateOrder();
          return order_id + "";
        }}
        onApprove={async (data, actions) => {
          let response = await paypalCaptureOrder(data.orderID);
          if (response.success) {
            if (id) {
              await wooCreatePayment(id, response.data.id);
              // console.log(wooResponse);
              // if (wooResponse.success) {
              //   router.push({
              //     pathname: `/thanks-for-ordering-from-cdi-furlers`,
              //     query: { orderId },
              //   });
              // }
              // const swellOrderResponse = await swellCreateOrder();
            }
            return true;
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
