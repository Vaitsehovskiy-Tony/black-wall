import { useState } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState();
  const [modalContent, setModalContent] = useState('');
    
  const handleModal = () => setModalState(!modalState);
  const handleModalContent = (contentType) => setModalContent(contentType);

  return { modalState, handleModal, modalContent, handleModalContent };
};
