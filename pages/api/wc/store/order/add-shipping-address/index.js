import { WooCommerce } from "../../products/reports";
// const addItemToCart = async (id, quantity, variant, token) => {
// return await fetch(
//   `${process.env.PUBLIC_URL}/wp-json/wc/store/v1/cart/add-item`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Nonce: token,
//     },
//     body: JSON.stringify({
//       id: Number(id),
//       quantity: Number(quantity),
//       variation: variant,
//     }),
//   }

// );
const addShippingToOrder = async (id, shipping) => {
  return await WooCommerce.put(`orders/${id}`, {
    shipping: shipping,
  })
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.body.id || !req.body.shipping)
    return res.status(400).json({
      success: false,
      message: "Please Provide order id and shipping address",
    });
  // const variation = [
  //   {
  //     attribute: req.body.variant[0].attributes[0].name,
  //     value: req.body.variant[0].attributes[0].option,
  //   },
  // ];
  try {
    const response = await addShippingToOrder(req.body.id, req.body.shipping);
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
