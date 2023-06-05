import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { client } from "./apollo";
import { ApolloProvider } from "@apollo/client";
import { UIProvider } from "./context/uiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UIProvider initialProps={{ loading: false, placeholderImage: true }}>
        <App />
      </UIProvider>
    </ApolloProvider>
  </React.StrictMode>
);
