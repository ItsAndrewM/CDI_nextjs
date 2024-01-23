const getProductId = async (slug) => {
  return await fetch(
    `${process.env.PUBLIC_URL}/wp-json/wc/store/v1/products/${slug}`
  )
    .then((response) => response.json())
    .then((data) => {
      return { id: data.id, prices: data.prices };
    })
    .catch((error) => {
      return error;
    });
};

import { WooCommerce } from "../../reports";

const getProduct = async (id) => {
  return WooCommerce.get(`products/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
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
    const id = await getProductId(req.query.id);
    console.log(id);
    const response = await getProduct(id.id);
    response.variations
      ? (response.variations = await getProductVariations(response.id))
      : (response.variations = []);
    response.prices = id.prices;
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
