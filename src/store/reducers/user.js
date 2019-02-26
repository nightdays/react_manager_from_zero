import { combineReducers } from "redux";

const detailInit = {
  name: "Jay.Liu"
};

function detail(state = detailInit, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, { name: "小南" });
    default:
      return state;
  }
}

const user = combineReducers({
  detail
});

export default user;
