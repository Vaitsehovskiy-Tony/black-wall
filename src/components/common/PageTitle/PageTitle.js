export default function PageTitle({ description, title }) {
  return (
    <div className="page-title__content">
      <h2 className="page-title__description">{description}</h2>
      <h1 className="page-title__title">{title}</h1>
    </div>
  );
}
