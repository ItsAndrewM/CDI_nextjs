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
const getShippingMethod = async () => {
  return await WooCommerce.get("shipping_methods")
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });

  try {
    const response = await getShippingMethod();
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
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
