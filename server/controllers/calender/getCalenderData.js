import CalenderData from "../../database/schema/calenderSchema.js";

async function getCalenderData(req, res) {
  try {
    let data = await CalenderData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    res.status(500).json({ message: "Failed to retrieve calender data" });
  }
}

export default getCalenderData;
