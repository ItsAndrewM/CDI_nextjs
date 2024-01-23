const validateToken = async () => {
  return await fetch(
    `https://cdifurlers.elementor.cloud/wp-json/jwt-auth/v1/token/validate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NkaWZ1cmxlcnMuZWxlbWVudG9yLmNsb3VkIiwiaWF0IjoxNzAwMDY1NTY1LCJuYmYiOjE3MDAwNjU1NjUsImV4cCI6MTcwMDY3MDM2NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiNjY4NSJ9fX0.LAcJsh-SivsraXHrycXpo2-Y7nxYECafPlVkd6p6w94`,
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
    const response = await validateToken();
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
