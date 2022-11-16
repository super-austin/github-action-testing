// External dependencies
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

// Internal dependencies
import MainRouter from "./routes/MainRouter";
import NearProvider from "./providers/NearProvider";
import theme from "./themes/MainTheme";
import { persistor, store } from "./store/store";

// CSS dependencies
import "./App.css";
import "./components/Common/scss/Global.scss";
import { PersistGate } from "redux-persist/es/integration/react";

/**
 * MainApp Component
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NearProvider>
            <MainRouter />
          </NearProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
