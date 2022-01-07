import { memorize } from "../utils/memorize";
import { selector } from "recoil";
import { cellValueState } from "./cellStore";
import { cellKeyToMatrix } from "../utils/cellKeyToMatrix";
import { getEquationExpression } from "../utils/getEquationExpression";
export const evaluatedCellValueStore: any = (cellKey: string) =>
  memorize(`evaluatedCell_${cellKey}`, () =>
    selector({
      key: `evaluatedCell_${cellKey}`,
      get: ({ get }) => {
        const value = get(cellValueState(cellKey)) as string;

        if (value.startsWith("=")) {
          try {

           
            // return value.slice(1);
            const evaluatedExpression = getEquationExpression(get, value.slice(1))
            return evaluatedExpression
          } catch { 
            return value;
          }

          // console.log(value.slice(1))
        }
         else{
            // console.log(value)
            return value
         }
      },
    })
  );
