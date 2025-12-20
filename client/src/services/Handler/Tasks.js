import toast from "react-hot-toast";

import generateWeeklySessions from "../data/generateWeeklySessions";
import { taskDataService } from "../dispatch/taskDataService";
import supabase from "../../api/supabaseClient";

// i am using get task everytime i do something witht he tasks which will reduce performance
// trying to find a way to update locally and sync it with database

export const newTask = async (payload) => {
  try {
    if (!payload) throw new Error("no payload provided");
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: addedCourseData, error: addedCourseError } = await supabase
      .from("courses")
      .insert({
        user_id: user.id,
        professor_name: payload.name,
        course_name: payload.title,
        course_code: payload.code || null,
      })
      .select()
      .single();

    if (addedCourseError) throw addedCourseError;

    const newPayload = { ...payload, course_id: addedCourseData.id };
    const sessions = generateWeeklySessions(newPayload);
    console.log(addedCourseData);
    console.log(sessions);
    const { data: addedSessionData, error: addedSessionsError } = await supabase
      .from("course_sessions")
      .insert(sessions)
      .select();

    if (addedSessionsError) throw addedSessionsError;
    getTask();
    toast.success("New Task was added");
  } catch (error) {
    console.error(error.message || addedCourseError || addedSessionError);
  }
};

export const getTask = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const userId = user.id;

    const { data: coursesData, error: coursesDataError } = await supabase
      .from("courses")
      .select(
        `
        id,
        user_id,
        professor_name,
        course_name,
        course_code,
        course_sessions(
        id,
        course_id,
        location,
        start_datetime,
        end_datetime,
        status
        )
        `
      )
      .eq("user_id", userId);

    const { data: statsData, error: statsError } = await supabase
      .from("course_stats")
      .select("*");

    // console.log(coursesData);

    taskDataService.fetchData(coursesData);
    taskDataService.fetchStats(statsData);
    if (coursesDataError) throw coursesDataError;
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const deleteTask = async (id) => {
  try {
    const { error } = await supabase.from("courses").delete().eq("id", id);

    if (error) throw error;
    getTask();
  } catch (err) {
    console.error(err.message);
  }
};

export const editTask = async (payload) => {
  const courseId = payload.id;

  try {
    const { data: afterEditCourse, error } = await supabase
      .from("courses")
      .update({
        course_name: payload.title,
        professor_name: payload.name,
        course_code: payload.course_code,
      })
      .eq("id", courseId)
      .select()
      .single();

    if (error) throw error;

    getTask();
  } catch (err) {
    console.error("Failed to edit task:", err.message);
  }
};

export const editSession = async (payload) => {
  const sessionId = payload.id;
  if (!payload) throw new Error("no Session was Provided");
  try {
    const { data, error } = await supabase
      .from("course_sessions")
      .update({
        status: payload.status.trim(),
      })
      .eq("id", sessionId)
      .select();

    getTask();

    if (error) throw error;
    console.log(data);
    return;
  } catch (err) {
    console.error(err.message);
  }
};
