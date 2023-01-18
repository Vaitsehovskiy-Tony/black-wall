import { Navbar } from "../../common/Navbar/Navbar";

export const NavBarModal = ({ content, handleModal, handleModalContent }) => {
  return (
    <>
      <Navbar navbar={content} handleModal={handleModal} />
      <hr className="modal__hr" />
      <button className="modal__order-button" onClick={() => handleModalContent("orderForm")} >
        написать на почту
      </button>
    </>
  );
};
