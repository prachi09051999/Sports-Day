export const validateTimeOfEvent = (sport, selectedSports) => {
  const startTime =
    Number(sport?.start_time?.substr(11, 2)) * 60 +
    Number(sport?.start_time?.substr(14, 2));
  const endTime =
    Number(sport?.end_time?.substr(11, 2)) * 60 +
    Number(sport?.end_time?.substr(14, 2));
  for (let currSport in selectedSports) {
    console.log(currSport);
    const currStartTime =
      Number(selectedSports[currSport]?.start_time?.substr(11, 2)) * 60 +
      Number(selectedSports[currSport]?.start_time?.substr(14, 2));
    const currEndTime =
      Number(selectedSports[currSport]?.end_time?.substr(11, 2)) * 60 +
      Number(selectedSports[currSport]?.end_time?.substr(14, 2));
    console.log(currStartTime, currEndTime);
    if (
      (startTime >= currStartTime && startTime < currEndTime) ||
      (endTime > currStartTime && endTime <= currEndTime)
    )
      return false;
  }
  return true;
};
