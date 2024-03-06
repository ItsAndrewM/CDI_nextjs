import { WooCommerce } from "../../products/reports";

const addShippingMethodToOrder = async (id, shipping_lines) => {
  return await WooCommerce.put(`orders/${id}`, {
    shipping_lines,
  })
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.body.id || !req.body.shipping_lines)
    return res.status(400).json({
      success: false,
      message: "Please Provide order id and shipping lines and shipping class",
    });

  try {
    const response = await addShippingMethodToOrder(
      req.body.id,
      req.body.shipping_lines
    );
    console.log(response);
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
