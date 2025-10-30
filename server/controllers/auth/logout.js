function logout(req, res) {
  res.clearCookie("access_token");
  res.clearCookie("refres_token");
  res.status(200).json({ message: "Logged out successfully" });
}
