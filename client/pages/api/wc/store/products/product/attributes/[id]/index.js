import { WooCommerce } from "../../../reports/index";

export const getProductAttributes = async (id) => {
  return await WooCommerce.get(`products/attributes/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.id) {
    return res.status(400).json({
      success: false,
      message: "Please Provide product id",
    });
  }
  try {
    const response = await getProductAttributes(req.query.id);
    if (!response) {
      console.log("RES: ", response);
      return res
        .status(500)
        .json({ success: false, message: "Some Error Occured at backend" });
    }
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
