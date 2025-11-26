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

import HeroContainer from "../../../components/UI/container/HeroContainer";

function CalendarApp() {
  const eventModal = createEventModalPlugin();
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        description: "zeby",
        start: Temporal.ZonedDateTime.from("2025-11-26T20:00[Africa/Cairo]"),
        end: Temporal.ZonedDateTime.from("2025-11-26T21:00[Africa/Cairo]"),
      },
    ],
    plugins: [eventsService, createDragAndDropPlugin(), eventModal],
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, []);

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, [calendar]);

  return (
    <HeroContainer>
      <ScheduleXCalendar calendarApp={calendar} />
    </HeroContainer>
  );
}

export default CalendarApp;
