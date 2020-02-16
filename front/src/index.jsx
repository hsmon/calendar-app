import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk"

import CalendarBoard from "./components/CalenderBoard/container";
import Navigation from "./components/Navigation/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import rootReducer from "./redux/rootReducer";
import ErrorSnackbar from "./components/ErrorSnackbar/contaienr";

const store = createStore(rootReducer,applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
      <ErrorSnackbar />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
