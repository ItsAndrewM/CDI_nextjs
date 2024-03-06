import { WooCommerce } from "../../products/reports";
//   payment_method: "ppcp-gateway",
//   payment_method_title: "PayPal",
//   transaction_id: "04311456BY9743516",
//   set_paid: true
const addPaymentMethodToOrder = async (id, transaction_id) => {
  return await WooCommerce.put(`orders/${id}`, {
    transaction_id,
    payment_method: "ppcp-gateway",
    payment_method_title: "PayPal",
    set_paid: true,
    status: "processing",
  })
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.body.id || !req.body.transaction_id)
    return res.status(400).json({
      success: false,
      message: "Please Provide order id and transaction id",
    });

  try {
    const response = await addPaymentMethodToOrder(
      req.body.id,
      req.body.transaction_id
    );
    if (response.data) {
      if (response.data.status) {
        if (
          response.data.status === 403 ||
          response.data.status === 401 ||
          response.data.status === 400
        ) {
          console.log("RES: ", response);
          return res.status(500).json({
            success: false,
            message: "Some Error Occured at backend",
            error: response,
          });
        }
      }
    }
    // res.setHeader("nonce", nonce);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
