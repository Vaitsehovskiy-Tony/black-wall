import { Logo } from "../common/Logo/Logo";
import { Navbar } from "../common/Navbar/Navbar";
import { HeaderCTABtn } from "./HeaderCTABtn/HeaderCTABtn";
import { HeaderLanguageSelector } from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { HeaderStyle } from "../../utils/getHeaderStyle";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const Header = () => {
  const headerStyle = HeaderStyle();
  const header = useFetch("header");
  const orderForm = useFetch("orderForm");
  const [modalState, setModalState] = useState({
    state: false,
    content: "navbar",
  });

  const handleModal = (type) => {
    if (type === "orderForm") {
      setModalState({ state: modalState.state, content: type });
    } else {
      setModalState({ state: !modalState.state, content: "navbar" });
    }
  };

  if (header.isLoading || orderForm.isLoading) {
    return <Preloader />;
  }

  return (
    <header className={`header header_${headerStyle}`}>
      <Modal
        type={""}
        navbar={header.content.navbar}
        orderForm={orderForm.content}
        modalState={modalState}
        handleModal={handleModal}
      />
      <div className="header__wrapper">
        <Logo headerStyle={headerStyle || "light"} />
        <Navbar navbar={header.content.navbar} />
        <HeaderLanguageSelector headerStyle={headerStyle || "light"} />
        <HeaderCTABtn
          bttnText={header.content.orderProject}
          headerStyle={headerStyle || "light"}
          modalState={modalState}
          handleModal={handleModal}
        />
      </div>
    </header>
  );
};
