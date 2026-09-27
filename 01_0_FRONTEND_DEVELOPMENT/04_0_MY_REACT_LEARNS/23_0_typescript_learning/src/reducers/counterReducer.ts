export type CounterState = {
  count: number;
};

type IncrementAction = {
  type: "INCREMENT";
};

type DecrementAction = {
  type: "DECREMENT";
};

type ResetAction = {
  type: "RESET";
};

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
