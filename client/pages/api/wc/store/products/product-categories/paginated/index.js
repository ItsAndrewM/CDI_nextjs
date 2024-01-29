import { PER_PAGE } from "@/lib/operations/operations-woocommerce";
import { WooCommerce } from "../../reports";
const getCategories = async (order, orderBy, page) => {
  return await WooCommerce.get(
    `products/categories?per_page=${PER_PAGE}&order=${
      order ? order : "asc"
    }&orderby=${orderBy ? orderBy : "name"}&page=${
      page ? page : 1
    }&hide_empty=true`
  )
    .then((response) => {
      const total_pages = response.headers["x-wp-totalpages"];
      const total_categories = response.headers["x-wp-total"];
      return {
        categories: response.data,
        total_pages: total_pages,
        total_categories: total_categories,
      };
    })
    .catch((error) => error);
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query) {
    return res.status(400).json({
      success: false,
      message: "Please provide the required fields",
    });
  }
  try {
    const response = await getCategories(
      req.query.order,
      req.query.orderby,
      req.query.page
    );
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
