import { useState, createContext } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("navbar");

  const handleModal = () => setModalState(!modalState);
  const handleModalContent = (contentType) => setModalContent(contentType);

  const state = { modalState, handleModal, modalContent, handleModalContent };

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
