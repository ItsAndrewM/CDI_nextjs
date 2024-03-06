import { getProductsTotals } from "../reports";

const handler = async (req, res) => {
  if (req.method != "GET")
    return res.status(404).json({ success: false, message: "Not Found" });

  try {
    const response = await getProductsTotals();
    let totalProducts = 0;
    response.forEach((element) => {
      totalProducts += element.total;
    });
    if (!totalProducts) {
      console.log("RES: ", totalProducts);
      return res
        .status(500)
        .json({ success: false, message: "Some Error Occured at backend" });
    }
    res.status(200).json({ success: true, data: totalProducts });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
