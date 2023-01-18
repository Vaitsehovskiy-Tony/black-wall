import React, { useState } from "react";

const ModalContext = React.createContext();

const ModalContextProvider = ({ children }) => {
  const [modalState, setModalState] = useState(true);
  const [modalContent, setModalContent] = useState("orderForm");

  const handleModal = () => setModalState(!modalState);
  const handleModalContent = (contentType) => setModalContent(contentType);

  const state = { modalState, handleModal, modalContent, handleModalContent };

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
