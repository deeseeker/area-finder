import AppContext from "@/AppContext";
import { initData } from "@/public/data";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("reviews");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(initData);
    }
  }, []);
  return (
    <AppContext.Provider value={data}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
