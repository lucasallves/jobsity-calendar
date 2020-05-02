import { createContext } from 'react';

const CalendarContext = createContext({
  selectedDate: {
    day: null,
    month: null,
    year: null,
    fullDay: null
  },
  navigation: {
    month: null,
    year: null
  },
  reminders: [],
  setDate: () => { },
  setNavigation: () => { },
  addReminder: () => { },
  updateReminder: () => { },
  deleteSingleReminder: () => { },
  deleteRemindersByDate: () => { }
})

export default CalendarContext;