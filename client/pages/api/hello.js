import { PER_PAGE } from "@/lib/operations/operations-woocommerce";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://cdifurlers.elementor.cloud/", // Your store URL
  consumerKey: process.env.WOOCOMMERCE_KEY, // Your consumer key
  consumerSecret: process.env.WOOCOMMERCE_SECRET, // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

const getShippingClasses = async () => {
  return await WooCommerce.get(
    "products/shipping_classes?hide_empty=true&per_page=100"
  )
    .then((response) => response.data)
    .catch((error) => error);
};

const getShippingMethods = async () => {
  return await WooCommerce.get("shipping_methods")
    .then((response) => response.data)
    .catch((error) => error);
};

const getProducts = async () => {
  // return WooCommerce.get(`products?per_page=2&status=publish`)
  return await WooCommerce.get(
    `products?status=publish&per_page=16&order=asc&orderby=title&page=1&min_price=0&max_price=200000&category=&shipping_class=64&search=&tag=`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const getOrder = async () => {
  return await WooCommerce.post("orders", {})
    .then((response) => response.data)
    .catch((error) => error);
};

const addItemToOrder = async (id, product_id, variation_id) => {
  return await WooCommerce.put(`orders/${id}`, {
    line_items: [{ product_id: product_id, variation_id: variation_id }],
  })
    .then((response) => response.data)
    .catch((error) => error);
};

const getProductVariations = async (id) => {
  return WooCommerce.get(`products/${id}/variations?status=publish`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const getCategories = async () => {
  return await WooCommerce.get("products/categories?per_page=30")
    .then((res) => res.data)
    .catch((error) => error);
};

const getProductsWithoutClient = async (offset, orderBy) => {
  return await fetch(
    `https://cdifurlers.elementor.cloud/wp-json/wc/store/v1/products?page=${
      offset ? offset : 1
    }&per_page=${PER_PAGE}&${
      orderBy
        ? `order=${orderBy.split("-")[1]}&orderBy=${orderBy.split("-")[0]}`
        : "order=asc&orderby=title"
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getProductTags = async () => {
  return await WooCommerce.get("products/tags?per_page=100&hide_empty=true")
    .then((res) => res.data)
    .catch((error) => error);
};

const getShippingClassById = async (id) => {
  return await WooCommerce.get(`products/shipping_classes/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

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
    const response = await getShippingClasses();
    const methods = await getShippingMethods();
    //64
    if (!response) {
      console.log("RES: ", response);
      return res
        .status(500)
        .json({ success: false, message: "Some Error Occured at backend" });
    }
    res.status(200).json({ success: true, data: { response, methods } });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
