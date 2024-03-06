import { WooCommerce } from "../../products/reports";

const updateItemInCart = async (id, quantity, product) => {
  const newSubtotal = product.price * Number(quantity);
  return await WooCommerce.put(`orders/${id}`, {
    line_items: [
      {
        id: product.id,
        product_id: product.product_id,
        variation_id: product.variation_id ? product.variation_id : null,
        quantity: !quantity ? 1 : quantity,
        subTotal: String(newSubtotal),
        total: String(newSubtotal),
      },
    ],
  })
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.body.id || !req.body.quantity || !req.body.product)
    return res.status(400).json({
      success: false,
      message: "Please Provide item id, quantity, variant and product id",
    });
  try {
    const response = await updateItemInCart(
      req.body.id,
      req.body.quantity,
      req.body.product
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
