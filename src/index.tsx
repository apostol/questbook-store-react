import React from "react";
import { createRoot } from "react-dom/client";
import App from "~/components/App/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "~/theme";
import { persistor, store } from "~/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { config } from "./constants/config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: Infinity },
  },
});

if (config.mode) {
  const { worker } = await import("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}
const container = document.getElementById("app");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <PersistGate loading="<div>Loading...</div>" persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={config.mode} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
