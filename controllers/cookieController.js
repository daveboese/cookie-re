// controller for cookie

const setCookie = (req, res) => {
  const token = "token";
  res
    .cookie("access_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    })
    .status(200)
    .json({
      success: true,
      message: "Cookie wurde gesetzt!",
    });
};

module.exports = {
  setCookie,
};  