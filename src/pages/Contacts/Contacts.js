import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ContactUs } from "../../components/ContactUs/ContactUs";

export const Contacts = ({ orderFormContent, contactUsContent }) => {
  const contacts = useFetch("contactsPage");
  console.log(contacts)
  if (contacts.isLoading) {
    return <Preloader />;
  }

  return (
    <main className="contacts-page page__wrapper">
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
