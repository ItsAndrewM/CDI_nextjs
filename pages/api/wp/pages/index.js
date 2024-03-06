const getPages = async (page) => {
  return await fetch(
    `${process.env.PUBLIC_URL}/wp-json/wp/v2/pages?per_page=100&page=${
      !page ? 1 : page
    }`,
    {
      headers: {
        Authorization: `Basic ${process.env.WP_BASIC_AUTH}`,
      },
    }
  )
    .then((response) => {
      return response;
    })
    .then((data) => data);
};

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  try {
    const data = await getPages();
    const total_pages = data.headers.get("X-WP-TotalPages");
    const response = await data.json();
    if (response.data) {
      if (response.data.status === 401) {
        console.log("RES: ", response);
        return res
          .status(500)
          .json({ success: false, message: "Some Error Occured at backend" });
      }
    }
    res
      .status(200)
      .json({ success: true, data: { posts: response, total_pages } });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
