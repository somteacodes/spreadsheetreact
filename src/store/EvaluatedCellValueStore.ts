import { memorize } from "../utils/memorize";
import { selector } from "recoil";
import { cellValueState } from "./cellStore"; 
import { getEquationExpression } from "../utils/getEquationExpression";
export const evaluatedCellValueStore: any = (cellKey: string) =>
  memorize(`evaluatedCell_${cellKey}`, () =>
    selector({
      key: `evaluatedCell_${cellKey}`,
      get: ({ get }) => {
        const value = get(cellValueState(cellKey)) as string;

        if (value.startsWith("=")) {
          try {
 
            const evaluatedExpression = getEquationExpression(get, value.slice(1))
            return evaluatedExpression
          } catch { 
            return value;
          }
 
        }
         else{
           
            return value
         }
      },
    })
  );
