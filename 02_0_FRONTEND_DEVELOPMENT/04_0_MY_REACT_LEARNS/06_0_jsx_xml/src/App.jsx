import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const App = () => {
  return _jsxs("section", {
    id: "section",
    children: [
      _jsx("h1", {
        children: "My Website"
      }),

      _jsxs("article", {
        children: [
          _jsx("h2", {
            children: "Welcome to KKD's World"
          }),

          _jsx("p", {
            className: "text",
            children: "Paragraph Content"
          })
        ]
      })
    ]
  });
};

export default App;