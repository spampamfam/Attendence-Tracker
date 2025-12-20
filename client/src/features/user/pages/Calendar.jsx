import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import HeroContainer from "../../../components/UI/container/HeroContainer";
import { seedCalendarData } from "../../../services/data/seedCalendarData";
import { taskDataService } from "../../../services/dispatch/taskDataService";

function CalendarApp() {
  // Redux data
  const data = useSelector((state) => state.tasks.data);

  // State for calendar events
  const [calendarData, setCalendarData] = useState([]);

  // Plugins
  const eventModal = createEventModalPlugin();
  const eventsService = useState(() => createEventsServicePlugin())[0];
  // const dragAndDrop = createDragAndDropPlugin();

  // Initialize calendar
  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [], // events will be loaded dynamically
    plugins: [eventsService, eventModal],
  });

  // Load events when Redux data changes
  useEffect(() => {
    console.log(data);
    if (!data || !data[0]?.courses?.length) return; // safe guard

    const events = (seedCalendarData(data) || []).map((task) => ({
      id: task.id,
      title: task.title,
      start: Temporal.ZonedDateTime.from(task.start),
      end: Temporal.ZonedDateTime.from(task.end),
    }));

    setCalendarData(events);
    eventsService.set(events); // update ScheduleX
  }, [data, eventsService]);

  // Optional: fetch all events when component mounts
  useEffect(() => {
    eventsService.getAll();
  }, [eventsService]);

  return (
    <HeroContainer>
      <ScheduleXCalendar calendarApp={calendar} />
    </HeroContainer>
  );
}

export default CalendarApp;
