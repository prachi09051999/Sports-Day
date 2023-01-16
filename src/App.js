import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import fetchSportsData from "./services//fetchSportsData";
import SelectedSports from "./components/SelectedSports";
import AllSports from "./components/AllSports";
import { validateTimeOfEvent } from "./utils/validateTime";

export default function App() {
  const dispatch = useDispatch();
  const sportsData = useSelector((state) => state.data);
  const [allSports, setAllSports] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);

  const changeCardState = (sportId, isEnabling = false) => {
    const updatedSportsState = allSports;
    updatedSportsState.map((currSport) => {
      if (isEnabling) {
        if (currSport.id === sportId) {
          currSport["isEnabled"] = true;
        }
      } else {
        if (currSport.id === sportId) {
          currSport["isEnabled"] = false;
        }
      }
      return currSport;
    });
    setAllSports(updatedSportsState);
  };

  const selectSportHandler = (sport) => {
    if (selectedSports.length >= 3) {
      window.alert("You have exceeded the limit of selecting 3 Sports");
      return;
    }
    if (validateTimeOfEvent(sport, selectedSports)) {
      if (sport.isEnabled) {
        changeCardState(sport.id);
        setSelectedSports((prevSports) => [...prevSports, sport]);
      }
    } else {
      window.alert("Sport Timing is overlapping with a Selected Event!");
    }
  };

  useEffect(() => {
    fetchSportsData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const sportsArray = sportsData.map((sportEvent) => {
      sportEvent["isEnabled"] = true;
      return sportEvent;
    });
    setAllSports(() => sportsArray);
  }, [sportsData]);

  useEffect(() => {
    console.log(allSports, sportsData);
  }, [allSports, sportsData]);

  return (
    <div className="App">
      <div className="container">
        <AllSports
          allSports={allSports}
          selectSportHandler={selectSportHandler}
        />
        <SelectedSports
          selectedSports={selectedSports}
          setSelectedSports={setSelectedSports}
          changeCardState={changeCardState}
        />
      </div>
    </div>
  );
}
