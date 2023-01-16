export const SportsActionTypes = {
  FETCH_SPORTS_DATA: "FETCH_SPORTS_DATA",
  UPDATE_SPORTS_DISABLE_STATE: "UPDATE_SPORTS_DISABLE_STATE",
  UPDATE_SPORTS_ENABLE_STATE: "UPDATE_SPORTS_ENABLE_STATE",
  START_LOADER: "START_LOADER",
  END_LOADER: "END_LOADER",
};

export const startLoading = () => {
  return { type: SportsActionTypes.START_LOADER };
};

export const endLoading = () => {
  return { type: SportsActionTypes.END_LOADER };
};

export const fetchSports = (sports) => {
  const sportsArray = sports;
  sportsArray.map((sportEvent) => {
    sportEvent.isEnabled = true;
    return sportEvent;
  });
  return { type: SportsActionTypes.FETCH_SPORTS_DATA, element: sportsArray };
};

export const updateDisabledSports = (sportId) => {
  return {
    type: SportsActionTypes.UPDATE_SPORTS_DISABLE_STATE,
    element: sportId,
  };
};

export const updateEnabledSports = (sportId) => {
  return {
    type: SportsActionTypes.UPDATE_SPORTS_ENABLE_STATE,
    element: sportId,
  };
};
