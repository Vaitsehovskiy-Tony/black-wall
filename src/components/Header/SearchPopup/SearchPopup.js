import closeIcon from "../../../images/close-icon.svg";

export default function SearchPopup(props) {
  return (
    <div className={`search-popup ${props.searchActive ? "active" : ""}`}>
      <img
        src={closeIcon}
        alt="close icon"
        className="search-popup__close-icon"
        onClick={props.handleMenuIsOpened}
      />
      <input
        type="text"
        className="search-popup__search-field"
        placeholder="Найти..."
      />
    </div>
  );
}
