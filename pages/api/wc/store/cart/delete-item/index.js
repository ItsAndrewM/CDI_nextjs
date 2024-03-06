import { WooCommerce } from "../../products/reports";

const deleteItemInCart = async (id, cart_item_id, product_id, variation_id) => {
  return await WooCommerce.put(`orders/${id}`, {
    line_items: [
      {
        id: cart_item_id,
        product_id: product_id,
        variation_id: variation_id,
        quantity: 0,
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
    !req.body.cart_item_id ||
    !req.body.product_id ||
    !req.body.variation_id
  )
    return res.status(400).json({
      success: false,
      message: "Please Provide item id, quantity, variant and product id",
    });
  try {
    const response = await deleteItemInCart(
      req.body.id,
      req.body.cart_item_id,
      req.body.product_id,
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
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
