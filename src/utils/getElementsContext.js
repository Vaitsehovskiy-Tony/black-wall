import { useState, createContext } from "react";

const ElementsContext = createContext();

const ElementsContextProvider = ({ children }) => {
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");
  const modalType = isNarrow.matches ? "navbar" : "orderForm";

  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState(modalType);

  const handleModal = () => setModalState(!modalState);
  const handleModalContent = (contentType) => setModalContent(contentType);


  const state = {
    modal: { modalState, handleModal, modalContent, handleModalContent },
  };

  return (
    <ElementsContext.Provider value={state}>
      {children}
    </ElementsContext.Provider>
  );
};

export { ElementsContextProvider, ElementsContext };
