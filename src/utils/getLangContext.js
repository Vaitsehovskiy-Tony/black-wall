import React from "react";
import { getLang } from "./getLang";

const LangContext = React.createContext();

const getLocales = () => {
  const localeOptions = ["en", "ru", "he"];
  const systemLocale = !!localStorage.getItem("locale")
    ? localStorage.getItem("locale")
    : getLang();
  const activeLocale = localeOptions
    .filter((i) => systemLocale.includes(i))
    .join();
  localeOptions.splice(localeOptions.indexOf(activeLocale), 1);

  return {
    activeLocale,
    localeOptions,
  };
};

const LangContextProvider = ({ children }) => {
  const { activeLocale, localeOptions } = getLocales();
  const [locales, setLocales] = React.useState({ activeLocale, localeOptions });

  const state = {
    locales,
    userLocaleChange: (locale) => {
      const activeLocale = locale;
      const localeOptions = ["en", "ru", "he"];
      localStorage.setItem("locale", locale);
      localeOptions.splice(localeOptions.indexOf(locale), 1);
      setLocales({ activeLocale, localeOptions });
    },
  };
  return <LangContext.Provider value={state}>{children}</LangContext.Provider>;
};

export { LangContextProvider, LangContext };
