import "./App.css";
import { useTranslator } from "intor/react";

function App() {
  const { t, tRich, setLocale } = useTranslator();

  return (
    <>
      <p>{t("hello", { name: "Intor" })}</p>

      <p>{tRich("rich", { tag: (children) => <b>{children}</b> })}</p>

      <button onClick={() => setLocale("en")}>English</button>
      <button onClick={() => setLocale("fr")}>French</button>
    </>
  );
}

export default App;
