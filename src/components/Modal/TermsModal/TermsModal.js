export const TermsModal = ({ modalProps }) => {
  const capitalisize = (str) => {
    return str.replace(/(.*?\. )|(.*?\.)/g, (match) => {
      return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    });
  };

  return <p className="terms__text">{capitalisize(modalProps.content)}</p>;
};
