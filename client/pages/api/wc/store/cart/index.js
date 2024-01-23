import { WooCommerce } from "../products/reports";
const getCart = async () => {
  // return await fetch(`${process.env.PUBLIC_URL}/wp-json/wc/store/v1/cart`);
  return await WooCommerce.post("orders", {})
    .then((response) => response.data)
    .catch((error) => error);
};

const handler = async (req, res) => {
  if (req.method != "POST")
    return res.status(404).json({ success: false, message: "Not Found" });

  try {
    const response = await getCart();
    if (!response) {
      console.log("RES: ", response);
      return res
        .status(500)
        .json({ success: false, message: "Some Error Occured at backend" });
    }
    // res.setHeader("nonce", nonce);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
