"use client";
import dynamic from "next/dynamic";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SSRProvider } from "react-bootstrap";
import FeedbackButton from "./components/FeedbackButton";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

// Remove the export of metadata from here
// export const metadata = {
//   title: "my-cart",
// };

export default function RootLayout({ children }) {
  // const Header = dynamic(()=>import('./components/Header'))
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
            <Header />
            <FeedbackButton />
            {children}
            <Footer />
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
