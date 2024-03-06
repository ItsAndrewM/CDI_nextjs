export const getToken = async () => {
  return await fetch(
    `https://cdifurlers.elementor.cloud/wp-json/jwt-auth/v1/token`,
    {
      method: "POST",
      body: JSON.stringify({
        username: "andrewmcmillan@precisionsailloft.com",
        password: "MurphyD0g$$$",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.token;
    });
};

const handler = async (req, res) => {
  try {
    const response = await getToken();
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
