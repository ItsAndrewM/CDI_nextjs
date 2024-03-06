const getCurrencyExchangeRatesByCode = async (code) => {
  return await fetch(
    `https://api.currencybeacon.com/v1/latest?api_key=${process.env.CURRENCY_BEACON_KEY}&base=${code}`
  )
    .then((res) => res.json())
    .catch((error) => error);
};

const handler = async (req, res) => {
  if (!req.method === "GET")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.query.code)
    return res
      .status(404)
      .json({ success: false, message: "Please provide a base currency code" });

  try {
    const response = await getCurrencyExchangeRatesByCode(req.query.code);
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
