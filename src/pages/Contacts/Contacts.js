import PageTitle from "../../components/common/PageTitle/PageTitle";
import { Avatars } from "../../components/common/Avatars/Avatars";
import { useContext } from "react";
import { DataContext } from "../../utils/getContext";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useFetch } from "../../hooks/useFetch";

const Contacts = () => {
  // const {  orderForm } = useContext(DataContext);

  const contacts = useFetch('contactsPage','page');
  const orderForm = useFetch('orderForm', 'page');

  debugger
  if (contacts.isLoading || orderForm.isLoading) {
    return <Preloader/>
  }
  return (
    <main className="contacts-page">
      <div className="contacts__wrapper">
        <PageTitle description={contacts.content.description} title={contacts.content.title} />
        <section className="contacts-page__container">
          <Avatars members={orderForm.content.formAvatars} display={""} />
        </section>
      </div>
    </main>
  );
};

export default Contacts;
