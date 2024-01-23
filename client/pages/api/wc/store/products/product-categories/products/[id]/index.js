const getProductsByCategory = async (id) => {
  return await fetch(
    `${process.env.PUBLIC_URL}/wp-json/wc/store/v1/products/?category=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.id) {
    return res.status(400).json({
      success: false,
      message: "Please Provide category id",
    });
  }
  try {
    const response = await getProductsByCategory(req.query.id);
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
