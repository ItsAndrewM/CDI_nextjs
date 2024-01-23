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
const addItemToCart = async (id, product_id, quantity, variation_id) => {
  return await WooCommerce.put(`orders/${id}`, {
    line_items: [
      {
        product_id: product_id,
        variation_id: variation_id,
        quantity: !quantity ? 1 : quantity,
      },
    ],
  })
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (
    !req.body.id ||
    !req.body.product_id ||
    !req.body.quantity ||
    !req.body.variation_id
  )
    return res.status(400).json({
      success: false,
      message: "Please Provide item id, quantity, variant and product id",
    });
  // const variation = [
  //   {
  //     attribute: req.body.variant[0].attributes[0].name,
  //     value: req.body.variant[0].attributes[0].option,
  //   },
  // ];
  try {
    const response = await addItemToCart(
      req.body.id,
      req.body.product_id,
      req.body.quantity,
      req.body.variation_id
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
