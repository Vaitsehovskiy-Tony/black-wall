import { useContext } from "react";
import { Helmet } from "react-helmet";
import { LangContext } from "../../../utils/getLangContext";

export const SEO = ({ seoData }) => {
  const seoImage = seoData.image;
  //   const seoImage = `https://api.vaitstony.art${seoData.image.data.attributes.url}`;
  const seoSiteName = "Black Wall";
  const seoTwitterCard = "summary_large_image";
  const seoFacebookType = "website";

  const { locales } = useContext(LangContext);

  const currentLocale =
    locales.activeLocale === "en"
      ? "en_US"
      : locales.activeLocale === "ru"
      ? "ru_RU"
      : "he_IL";

  return (
    <Helmet>
      <title>{seoData.title}</title>
      {/* <base href="/" /> */}
      {/* <link rel="canonical" href="https://www.rosenborgbakeri.no/" /> */}
      {/* <meta name="robots" content="index, follow" /> */}
      <meta name="keywords" content={seoData.keywords} />
      <meta name="description" content={seoData.description} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:type" content={seoFacebookType} />
      <meta property="og:locale" content={currentLocale}></meta>
      {/* <meta property="og:url" content="https://www.rosenborgbakeri.no/" /> */}
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={seoSiteName} />
      <meta property="og:description" content={seoData.description} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoImage} />
      <meta name="twitter:creator" content={seoSiteName} />
      <meta property="twitter:card" content={seoTwitterCard} />
    </Helmet>
  );
};
