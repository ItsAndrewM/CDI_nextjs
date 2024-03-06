const getPage = async (id) => {
  return await fetch(`${process.env.PUBLIC_URL}/wp-json/wp/v2/pages/${id}`, {
    headers: {
      Authorization: `Basic ${process.env.WP_BASIC_AUTH}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.id) {
    return res.status(400).json({
      success: false,
      message: "Please Provide page id",
    });
  }
  try {
    const response = await getPage(req.query.id);
    if (response.data) {
      if (response.data.status === 401) {
        console.log("RES: ", response);
        return res
          .status(500)
          .json({ success: false, message: "Some Error Occured at backend" });
      }
    }
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
