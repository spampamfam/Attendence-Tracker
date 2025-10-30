import jwt from "jsonwebtoken";

function accessToken(targetUser, res) {
  const accessToken = jwt.sign(
    { _id: targetUser._id, email: targetUser.email },
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
