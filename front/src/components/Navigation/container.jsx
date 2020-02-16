import Navigation from "./presentation";

import { connect } from "react-redux";
import { asyncScheduleFetchItem } from "../../redux/schedules/effects";

import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth
} from "../../services/calendar";
import { calenderSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calenderSetMonth(month));
  },
  fetchItem: month => {
    dispatch(asyncScheduleFetchItem(month))
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPrevioustMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: dayObj => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
