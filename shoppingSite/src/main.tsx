import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ReduxProvider store={store}>
          <Provider>
            <App />
          </Provider>
        </ReduxProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
