import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ContactUs } from "../../components/ContactUs/ContactUs";

export const Contacts = () => {
  const contacts = useFetch("contactsPage");
  const orderForm = useFetch("orderForm");
  const contactUs = useFetch("contactUs");

  if (contacts.isLoading || orderForm.isLoading || contactUs.isLoading) {
    return <Preloader />;
  }
  return (
    <main className="contacts-page">
      <div className="contacts__wrapper">
        <PageTitle
          description={contacts.content.description}
          title={contacts.content.title}
        />
        <section className="contacts-page__container">
          <div className="contacts-page__avatars">
            <Avatars
              members={orderForm.content.formAvatars}
              display={"visible"}
            />
          </div>
          <ContactUs content={contactUs.content} />
        </section>
      </div>
    </main>
  );
};
