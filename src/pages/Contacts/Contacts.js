import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { useLayoutEffect } from "react";
import { SEO } from "../../components/common/SEO/SEO";

export const Contacts = ({ orderFormContent, contactUsContent }) => {
  const contacts = useFetch("contactsPage");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (contacts.isLoading) {
    return <Preloader />;
  }
  
  const seoData = {
    title: "Black Wall",
    description: "BLACK WALL is an interior design and architecture studio. Our team designs residential and public interiors individually designed.",
    keywords: "Design, Interior, Architecture",
    image: "https://api.vaitstony.art/uploads/091_A1640_522f5c2e62.webp"
  }

  return (
    <main className="contacts-page page__wrapper">
      <SEO seoData={seoData} />
      <div className="contacts__wrapper">
        <PageTitle
          description={contacts.content.description}
          title={contacts.content.title}
        />
        <section className="contacts-page__container">
          <div className="contacts-page__avatars">
            <Avatars
              members={orderFormContent.formAvatars}
              display={"visible"}
            />
          </div>
          <ContactUs content={contactUsContent} extaClass={"no-title"} />
        </section>
      </div>
    </main>
  );
};
