import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./services/queryClient";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
