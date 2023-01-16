export default function SelectedSports({
  selectedSports,
  setSelectedSports,
  changeCardState,
}) {
  const removeSportHandler = (sport) => {
    changeCardState(sport.id,true);
    const updatedSports = selectedSports;
    updatedSports.splice(updatedSports.indexOf(sport), 1);
    setSelectedSports((prevSports) =>
      prevSports.filter((prevSport) => prevSport.id !== sport.id)
    );
  };

  return (
    <article className="sports-container">
      <h1>Selected Events</h1>
      {selectedSports.length>0 ? <ul className="selected-event-container">
        {selectedSports?.map((sport) => (
          <li id={sport.id} className="sport-card">
            <h3>Name of the Event - {sport?.event_name}</h3>
            <p>Event Category - {sport?.event_category}</p>
            <p className="timing">
              Timing - {sport?.start_time?.substr(11, 5)} -{" "}
              {sport?.end_time?.substr(11, 5)}
            </p>
            <button
              onClick={() => {
                removeSportHandler(sport);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul> : <div>Add some event quickly to begin the fun...</div>}
    </article>
  );
}
