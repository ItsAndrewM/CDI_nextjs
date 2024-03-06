import { WooCommerce } from "../../reports";

const getSearchProducts = async (search) => {
  return await WooCommerce.get(
    `products?search=${search}&status=publish&order=asc&orderby=title&per_page=100`
  )
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.search) {
    return res.status(400).json({
      success: false,
      message: "Please Provide search term",
    });
  }
  console.log("REQ: ", req.query.search);
  try {
    const response = await getSearchProducts(req.query.search);
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
