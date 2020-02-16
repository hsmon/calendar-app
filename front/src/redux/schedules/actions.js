//constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEMS";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";
export const SCHEDULE_FETCH_ITEM = "SCHEDULE_FETCH_ITEM";
export const SCHEDULE_SET_LOADING = "SCHEDULE_SET_LOADING";
export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE";
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR";

//actions
export const schedulesAddItem = payload => ({
  type: SCHEDULES_ADD_ITEM,
  payload
});

export const schedulesDeleteItem = payload => ({
  type: SCHEDULES_DELETE_ITEM,
  payload
});

export const schedulesFetchItem = payload => ({
  type: SCHEDULE_FETCH_ITEM,
  payload
});

export const schedulesSetLoading = () => ({
  type: SCHEDULE_SET_LOADING
});

export const schedulesAsyncFailure = error => ({
  type: SCHEDULES_ASYNC_FAILURE,
  error
});

export const schedulesResetError = () => ({
  type: SCHEDULES_RESET_ERROR
});
