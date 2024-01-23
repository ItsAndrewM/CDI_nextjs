import { PER_PAGE } from "@/lib/operations/operations-woocommerce";
import { WooCommerce } from "./reports";

export const getProductsByClient = async (query) => {
  const {
    page,
    min_price,
    max_price,
    shipping_class,
    category,
    search,
    tag,
    orderBy,
  } = query;
  const order = orderBy ? orderBy.split("-")[1] : "asc";
  const orderByField = orderBy ? orderBy.split("-")[0] : "title";
  return await WooCommerce.get(
    `products?per_page=${PER_PAGE}&page=${
      page ? page : 1
    }&order=${order}&orderby=${orderByField}&status=publish&min_price=${
      min_price ? min_price : "0"
    }&max_price=${max_price ? max_price : "200000"}&shipping_class=${
      shipping_class ? shipping_class : ""
    }&category=${category ? category : ""}&search=${search ? search : ""}&tag=${
      tag ? tag : ""
    }`
  )
    .then((res) => {
      const total_pages = res.headers["x-wp-totalpages"];
      const total_products = res.headers["x-wp-total"];
      return { total_pages, total_products, products: res.data };
    })
    .catch((err) => console.log(err));
};

// const getProducts = async (offset, orderBy) => {
//   return await fetch(
//     `https://cdifurlers.elementor.cloud/wp-json/wc/store/v1/products?page=${
//       offset ? offset : 1
//     }&per_page=${PER_PAGE}&${
//       orderBy
//         ? `order=${orderBy.split("-")[1]}&orderBy=${orderBy.split("-")[0]}`
//         : "order=asc&orderby=title"
//     }`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  // if (!req.query) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Please Provide offset number",
  //   });
  // }
  try {
    const response = await getProductsByClient(req.query);
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
