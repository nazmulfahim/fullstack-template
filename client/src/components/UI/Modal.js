import { useEffect } from "react";

import { useContext } from "react";
import ArrowLeftIcon from "../../assets/svgs/ArrowLeftIcon";
import ModalContext from "../../store/Modal/context";

const Modal = () => {
  const { ModalContent, dispatch } = useContext(ModalContext);

  useEffect(() => {
    if (ModalContent) {
      document.body.setAttribute(
        "style",
        `position: fixed; top: 0; left:0; right:0; bottom:0`
      );
    } else {
      document.body.setAttribute("style", "");
    }
  }, [ModalContent]);

  return (
    <div
      className={`modal ${ModalContent ? "active" : ""}`}
      onClick={() => dispatch({ type: "close" })}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal__close"
          onClick={() => dispatch({ type: "close" })}
        >
          <ArrowLeftIcon />
        </div>

        {ModalContent}
      </div>
    </div>
  );
};

export default Modal;
