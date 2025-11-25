import jwt from "jsonwebtoken";

function accessToken(targetUser, res) {
  const ID = targetUser._id.toString();
  const EMAIL = targetUser.email;
  const accessToken = jwt.sign(
    { _id: ID, email: EMAIL },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000, //onehour
  });
}

export default accessToken;
