function authMiddleware(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return res.redirect("/login");

  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.redirect("/login");
  }
}

export default authMiddleware;
