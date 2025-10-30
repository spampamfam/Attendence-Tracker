import jwt from "jsonwebtoken";

function refresh_token(targetUser, res) {
  const refreshToken = jwt.sign(
    { _id: targetUser._id, email: targetUser.email },
    process.env.REFRESH_KEY,
    {
      expiresIn: "7d",
    }
  );

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //onehour
  });
}

export default refresh_token;
