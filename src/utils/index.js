export function sortByTime(list) {
  const sorted = list.sort((a, b) => {
    const time1 = parseInt(a.time.replace(':', ''));
    const time2 = parseInt(b.time.replace(':', ''));
    if (time1 > time2) return 1;
    return -1;
  });

  return sorted;
}

export default { sortByTime }
