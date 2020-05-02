export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function titlelize(value) {
  const partials = value.split(' ');
  return partials.map(v => capitalize(v)).join(' ');
}

export function formatDate(date) {
  const day = date.day < 10 ? `0${date.day}` : date.day;
  const month = date.month < 10 ? `0${date.month}` : date.month;
  return `${month}/${day}/${date.year}`;
}

export default { capitalize, titlelize, formatDate }