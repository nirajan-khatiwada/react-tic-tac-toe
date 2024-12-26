
export default function GameBoard({ handleSelect, boards }) {
 
  return (
    <ol id="game-board">
      {boards.map((row, rowindex) => {
        return (
          <li key={rowindex}>
            <ol>
              {row.map((element, colindex) => {
                return (
                  <li key={colindex}>
                    <button
                      onClick={() => handleSelect(rowindex, colindex)}
                      disabled={element != null}
                    >
                      {element}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

// Kun button thichda kun hunnene,filter and delete
// passing index
