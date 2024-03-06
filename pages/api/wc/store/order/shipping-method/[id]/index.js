import { WooCommerce } from "../../../products/reports";
const getShippingMethodById = async (id) => {
  return await WooCommerce.get(`shipping_methods/${id}`)
    .then((response) => response.data)
    .catch((error) => error);
};
const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.id) {
    return res.status(400).json({
      success: false,
      message: "Please Provide shipping method id",
    });
  }
  try {
    const response = await getShippingMethodById(req.query.id);
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
