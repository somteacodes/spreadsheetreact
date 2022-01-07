import { cellValueState } from "../store/cellStore";
import { cellKeyToMatrix } from "./cellKeyToMatrix";

export const getEquationExpression = (
  getState: any,
  expression: any,
  notAllowedCellKeys: string[]=[]
) => {
  // check if cellkey is not causing a circular reference, by seeing if it is not already in the not allowed cell key array

  const filterFoundCells = notAllowedCellKeys.filter((cellKey) =>
    expression.includes(cellKey)
  );
  if (filterFoundCells.length) {
    return "!ERROR";
    }

    // no need to spread if limits of expression input is in the format /[A-Z]+[0-9]/
  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((regrexOutput: any) => regrexOutput[0])
    .map((cellKey: string) => {
      const { row, column } = cellKeyToMatrix(expression);
      let value = "";
      try {
        value = getState(cellValueState(`${row}_${column}`)) || 0;
        // set up recursive function to keep redoing till no formula left
        if (value.startsWith("=")) {
          notAllowedCellKeys.push(cellKey);
          value = getEquationExpression(
            getState,
            value.slice(1),
            notAllowedCellKeys
          );
        }
      } catch {}

      return {
        cellKey,
        value,
      };
    });
  return cellValues.reduce(
    (finalExpression, cellValue) =>
      finalExpression.replace(cellValue.cellKey, cellValue.value.toString()),
    expression
  );
};
