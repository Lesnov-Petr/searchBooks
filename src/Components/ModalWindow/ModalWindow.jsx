import { useState } from "react";
import { useEffect } from "react";
import "./style.scss";

const ModalWindow = ({ onHandleToggleModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", getCloseModal);
    return () => window.removeEventListener("keydown", getCloseModal);
  }, []);

  const getCloseModal = (event) => {
    if (event.code === "Escape") {
      onHandleToggleModal();
    }
  };
  return (
    <div className="overlay">
      <div className="modal__card"></div>
      <button onClick={onHandleToggleModal}>Закрыть модальное окно</button>
    </div>
  );
};

export default ModalWindow;
