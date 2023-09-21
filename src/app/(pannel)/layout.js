"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardTopbar from "./components/DashboardTopbar";

export const metadata = {
  title: "my-cart",
};
export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);

  const dashboardActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    // <SSRProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="images/icon.jpg" />
        <meta name="theme-color" content="#000" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Container fluid>
              <DashboardSidebar active={active} />
              <div className={active ? "main active" : "main"}>
                <DashboardTopbar
                  active={active}
                  dashboardActive={dashboardActive}
                />
                {children}
              </div>
            </Container>
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </PersistGate>
        </Provider>
      </body>
    </html>
    // </SSRProvider>
  );
}
