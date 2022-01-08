import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { sheetError } from "../../store/sheetStore";
import "./Modal.css";

const Modal: FC = () => {
    const setShowErrorModal = useSetRecoilState<boolean>(sheetError)
  return (
    <div className="modal">
      <div className="modalContent">
          <p className="title">We all make mistakes</p>
        <p>
          There are one or more circular references where a formular refers to
          its own cell either directly or indirectly.
        </p>
        <p>Try Removing or changing these references, or moving the formula to different cells.</p>
        <button className="btn blue-btn" onClick={()=>setShowErrorModal(false)}>
            Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
