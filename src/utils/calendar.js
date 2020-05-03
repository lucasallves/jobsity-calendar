import dayjs from 'dayjs';

export const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function getDataForMonthYear(month, year) {
  const firstDay = `${year}-${month}-01`;
  const numberOfdaysInMonth = dayjs(firstDay).daysInMonth();
  const lastDay = `${year}-${month}-${numberOfdaysInMonth}`;
  const firstDayOfWeek = dayjs(firstDay).format('d');
  const lastDayOfWeek = dayjs(lastDay).format('d');

  const daysInMonth = getDaysInMonth(month, year, numberOfdaysInMonth);
  const previousMonthDays = getPreviousMonthDays(month, year, firstDayOfWeek);

  const countDays = [...previousMonthDays, ...daysInMonth].length;
  const nextMonthDays = getNextMonthDays(month, year, countDays);

  return {
    firstDay,
    lastDay,
    firstDayOfWeek,
    lastDayOfWeek,
    numberOfdaysInMonth,
    daysInMonth,
    previousMonthDays,
    nextMonthDays
  }
}

export function getDaysInMonth(month, year, numberOfdaysInMonth) {
  let daysInMonth = [];

  for (let i = 1; i <= numberOfdaysInMonth; i++) {
    daysInMonth.push(formatDay(i, month, year));
  }

  return daysInMonth;
}

export function getPreviousMonthDays(month, year, firstDayOfWeek) {
  let prevMonth = month - 1;
  if (prevMonth < 0) prevMonth = 12;

  const prevMonthFirstDay = `${year}-${prevMonth}-01`;
  const numberOfdaysInMonth = dayjs(prevMonthFirstDay).daysInMonth();

  const start = (numberOfdaysInMonth - firstDayOfWeek) + 1;
  const previousDays = [];

  for (let i = start; i <= numberOfdaysInMonth; i++) {
    previousDays.push(formatDay(i, prevMonth, year));
  }

  return previousDays;
}

export function getNextMonthDays(month, year, countDays) {
  let nextMonth = month + 1;
  if (nextMonth > 12) nextMonth = 1;

  let missingDaysCount = 35 - countDays;
  if (missingDaysCount < 0) missingDaysCount = 42 - countDays;

  const missingDays = [];

  for (let i = 1; i <= missingDaysCount; i++) {
    missingDays.push(formatDay(i, nextMonth, year));
  }

  return missingDays;
}

export function formatDay(day, month, year) {
  return {
    day: parseInt(day),
    month: parseInt(month),
    year: parseInt(year),
    fullDay: `${year}-${month}-${day}`
  }
}

export function getMonthName(monthNumber) {
  return dayjs().month(monthNumber).format('MMMM');
}

export function getDayOfWeekName(date) {
  return dayjs(date.fullDay).format('dddd');
}

export default { monthList, weekNames, getDataForMonthYear, getMonthName, getDayOfWeekName };
