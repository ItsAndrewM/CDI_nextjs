//woocommerce_currency

import { WooCommerce } from "../../products/reports";

const getWoocommerceCurrency = async (id, data) => {
  return WooCommerce.put(`settings/general/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

const handler = async (req, res) => {
  if (req.method != "PUT")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.id) {
    return res.status(400).json({
      success: false,
      message: "Please Provide currency id",
    });
  }
  const data = { value: req.query.id };
  try {
    const response = await getWoocommerceCurrency("woocommerce_currency", data);
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
