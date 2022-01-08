import { FC } from "react";
import { useRecoilValue } from "recoil";
import Modal from "../../components/Modal/Modal";
import Sheet from "../../components/Sheet/Sheet";
import {sheetError} from '../../store/sheetStore'
import "./SheetView.css";


const SheetView: FC = () => {
  const showErrorModal = useRecoilValue(sheetError)
  return (
    <>
     {showErrorModal && <Modal/>}
      <Sheet />
    </>
  );
};

export default SheetView;
