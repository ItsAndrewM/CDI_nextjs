/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xid9xtw1a4y
 */
import { Country, State, City } from "country-state-city";
import { Button } from "@/components/ui/button";

import { useContext, useEffect, useState } from "react";
import { addShippingToOrder } from "@/lib/operations/operations-woocommerce";
import { CartContext } from "@/lib/context/cartContext";
import { useRouter } from "next/router";
import CartCheckoutTotal from "./cart-checkout-total";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PayPalButton from "../ui/payments/paypalButton/paypalButton";
import { Currency } from "./currency";
import { CurrencyContext } from "@/lib/context/currencyContext";

export function PaymentsPage() {
  const { orderId, cart, setCart, setOrderId } = useContext(CartContext);
  const { currentRate } = useContext(CurrencyContext);
  const router = useRouter();

  const handleShippingSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      try {
        const response = await addShippingToOrder(orderId, data);

        if (!response) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        setCart(response.data);
        router.push({ pathname: `/checkout/billing`, query: { orderId } });
      } catch (err) {
        console.error(err);
        alert(
          "We can't submit the form, please review your answers and try again."
        );
      }
    } else {
      setErrors(validationMessages);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 border-2 border-gray-200 shadow-lg p-4 rounded-md my-8">
      <div className="lg:grid lg:grid-cols-2 gap-4 flex flex-col ">
        <form className="flex flex-col gap-4" onSubmit={handleShippingSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center pt-4 ">
                <h2>Name</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : cart.shipping.first_name + " " + cart.shipping.last_name}
                </p>
              </div>
              {!cart ? null : !cart.billing.email ? null : (
                <div className="flex justify-between items-center pt-4">
                  <h2>Email</h2>
                  <p className="text-gray-500 capitalize">
                    {!cart ? null : cart.billing.email}
                  </p>
                </div>
              )}
              <div className="flex justify-between items-center pt-4">
                <h2>Phone Number</h2>
                <p className="text-gray-500 uppercase">
                  {!cart ? null : cart.shipping.phone}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center pt-4 ">
                <h2>Name</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : cart.shipping.first_name + " " + cart.shipping.last_name}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Address</h2>
                <p className="text-gray-500 capitalize">
                  {!cart ? null : cart.shipping.address_1}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Postal Code/Zipcode</h2>
                <p className="text-gray-500 uppercase">
                  {!cart ? null : cart.shipping.postcode}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>City</h2>
                <p className="text-gray-500 capitalize">
                  {!cart ? null : cart.shipping.city}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Province/State</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : State.getStateByCodeAndCountry(
                        cart.shipping.state,
                        cart.shipping.country
                      ).name}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Country</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : Country.getCountryByCode(cart.shipping.country).name}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center pt-4 ">
                <h2>Name</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : cart.billing.first_name + " " + cart.billing.last_name}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Address</h2>
                <p className="text-gray-500 capitalize">
                  {!cart ? null : cart.billing.address_1}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Postal Code/Zipcode</h2>
                <p className="text-gray-500 uppercase">
                  {!cart ? null : cart.billing.postcode}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>City</h2>
                <p className="text-gray-500 capitalize">
                  {!cart ? null : cart.billing.city}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Province/State</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : State.getStateByCodeAndCountry(
                        cart.billing.state,
                        cart.billing.country
                      ).name}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <h2>Country</h2>
                <p className="text-gray-500 capitalize">
                  {!cart
                    ? null
                    : Country.getCountryByCode(cart.billing.country).name}
                </p>
              </div>
            </CardContent>
          </Card>
        </form>
        <div className="flex flex-col gap-4">
          <CartCheckoutTotal cart={!cart ? null : cart} />
          {!cart ? null : (
            <div className="[&>*]:relative [&>*]:z-0 ">
              <PayPalButton
                cart={cart}
                id={orderId}
                setCart={setCart}
                setOrderId={setOrderId}
                currentRate={currentRate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
