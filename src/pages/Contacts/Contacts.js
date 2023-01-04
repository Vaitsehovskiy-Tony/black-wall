import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { PageTitle } from "../../components/common/PageTitle/PageTitle";

export const Contacts = () => {
  const contacts = useFetch("contactsPage");
  const orderForm = useFetch("orderForm");

  if (contacts.isLoading || orderForm.isLoading) {
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
          <Avatars members={orderForm.content.formAvatars} display={""} />
        </section>
      </div>
    </main>
  );
};
