import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputElement}
      />

      <button onClick={focusInput}>
        Focus & Write HuXn
      </button>
    </div>
  );
};

export default App;