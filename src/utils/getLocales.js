import {getLang} from "../utils/getLang";

export const getLocales = () => {
    const locales = ['en', 'ru', 'hb'];
    const systemLocale = getLang();
    const currentLocale = locales.filter(i =>
        systemLocale.includes(i)
    ).join();
    locales.splice(locales.indexOf(currentLocale), 1);

    return {
        currentLocale,
        locales
    }
}

export default getLocales;