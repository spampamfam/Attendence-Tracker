import jwt from "jsonwebtoken";

import accessToken from "./accessToken.js";
import refreshToken from "./refreshToken.js";

function refresh(req, res) {
  const oldToken = req.cookies.refresh_token;

  try {
    const decoded = jwt.verify(oldToken, process.env.REFRESH_KEY);
    accessToken(decoded, res);
    refreshToken(decoded, res);
    res.status(200).json({ message: "Access token refreshed" });
  } catch (error) {
    res.status(400), send("invalid_grant");
  }
}

export default refresh;
