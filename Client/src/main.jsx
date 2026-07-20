import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import TanstackProvider from "./layouts/provider/TanstackProvider";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <TanstackProvider>
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        richColors
        duration={3000}
        theme="dark"
      />
      <RouterProvider router={router} />,
    </Provider>
  </TanstackProvider>,
);
