// const getCategories = async () => {
//   return await fetch(
//     `${process.env.PUBLIC_URL}/wp-json/wc/store/v1/products/categories`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

import { WooCommerce } from "../reports";

const getCategories = async () => {
  return await WooCommerce.get(
    "products/categories?per_page=100&hide_empty=true"
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => error);
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });

  try {
    const response = await getCategories();
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
