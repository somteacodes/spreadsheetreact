import {memorize} from '../utils/memorize'
import { atom } from "recoil";
export const cellValueState:any = (cellKey: string) =>
  memorize(cellKey, () =>
    atom({
      key: `cell_${cellKey}`,
      default: "",
    })
  );
