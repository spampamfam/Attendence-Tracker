const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  const { data: user, error } = await supabase.auth.getUser(token);
  if (error) return res.status(401).json({ error: "Unauthorized" });
  if (error || !user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default authMiddleware;
