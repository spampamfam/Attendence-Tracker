import jwt from "jsonwebtoken";

import User from "../../database/schema/userSchema.js";
import supabase from "../../database/supabaseClient.js";

const fetchUserData = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  try {
    const { data: user, error } = await supabase.auth.getUser(token);
    if (error) return res.status(401).json({ error: "Unauthorized" });

    const { data: userData, error: userDataError } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (userDataError) {
      return res.status(500).json({
        message: "Failed to fetch user data",
        error: userDataError.message,
      });
    }

    const { data: coursesData, error: coursesDataError } = await supabase
      .from("courses")
      .select(
        `
        id,
        course_name,
        course_code,
        professor_name,
        course_sessions(*)
        `
      )
      .eq("student_id", user.id);

    if (coursesDataError) {
      return res.status(500).json({
        message: "Failed to fetch courses data",
        error: coursesDataError.message,
      });
    }

    return res.status(200).json({
      userInfo: userData,
      courses: coursesData,
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default fetchUserData;
