import { useEffect } from "react";
import { AuthProvider } from "./hooks/AuthProvider.js";
import AppRouter from "./router/AppRouter";

export default function App() {
  useEffect(() => {
    AuthProvider();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}
