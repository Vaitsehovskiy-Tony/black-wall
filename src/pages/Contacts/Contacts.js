import PageTitle from "../../components/common/PageTitle/PageTitle";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { useContext } from "react";
import { DataContext } from "../../utils/getContext";

const Contacts = () => {
  const { contacts, orderForm } = useContext(DataContext);
  return (
    <main className="contacts-page">
      <div className="contacts__wrapper">
        <PageTitle description={contacts.description} title={contacts.title} />
        <section className="contacts-page__container">
          <Avatars members={orderForm.formAvatars} display={""} />
        </section>
      </div>
    </main>
  );
};

export default Contacts;
