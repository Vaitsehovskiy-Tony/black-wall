import { getLang } from "../utils/getLang";

export const getLocales = () => {
  const localeOptions = ["en", "ru", "hb"];
  const systemLocale = getLang();
  const activeLocale = localeOptions.filter((i) => systemLocale.includes(i)).join();
    localeOptions.splice(localeOptions.indexOf(activeLocale), 1);

  return {
    activeLocale,
    localeOptions
  };
};
