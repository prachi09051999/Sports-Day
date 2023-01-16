import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AllSports({ allSports, selectSportHandler }) {
  const isContentLoading = useSelector(
    (state) => state?.isLoading
  );
  useEffect(()=>{
    console.log(isContentLoading)
  },[isContentLoading])
  return (
    <article className="sports-container">
      <h1>All Events</h1>
      {isContentLoading ? (
        <div>Loading data...</div>
      ) : allSports.length >0 ?(
        <ul className="all-event-container">
          {allSports?.map((sport) => (
            <li
              id={sport.id}
              className={`sport-card${sport.isEnabled ? " enabled" : ""}`}
            >
              <h3>Name of the Event - {sport?.event_name}</h3>
              <p>Event Category - {sport?.event_category}</p>
              <p className="timing">
                Timing - {sport?.start_time?.substr(11, 5)} -{" "}
                {sport?.end_time?.substr(11, 5)}
              </p>
              <button
                onClick={() => {
                  selectSportHandler(sport);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      ): <div>No Sport to show...</div>}
    </article>
  );
}
