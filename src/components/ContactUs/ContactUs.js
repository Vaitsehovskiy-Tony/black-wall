const ContactUs = ({ mainPageData }) => {
  const about = mainPageData.about;
  return (
    <section className="contacts">
      <h1>{about.title}</h1>
    </section>
  );
};

export default ContactUs;
