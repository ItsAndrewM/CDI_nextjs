//woocommerce_currency

const { WooCommerce } = require("../products/reports");

const getWoocommerceCurrency = async (id) => {
  return WooCommerce.get(`settings/general/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });

  try {
    const response = await getWoocommerceCurrency("woocommerce_currency");
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
