/**
 * 
 * @param {number} cellNum the number of the cell you want to check its neighbours
 */
export function getNeighbouringCells(cellNum,rLength) {
  let result = [];
  if (cellNum % rLength === 0) {
    result = result.concat([
      cellNum + 1,
      cellNum + rLength,
      cellNum + rLength+1,
      cellNum - rLength,
      cellNum - rLength  + 1
    ]);
  } else if (cellNum % rLength === rLength -1) {
    result = result.concat([
      cellNum - 1,
      cellNum - rLength,
      cellNum - rLength - 1,
      cellNum + rLength,
      cellNum + rLength -1
    ]);
  } else {
    result = result.concat([
      cellNum + 1,
      cellNum + rLength + 1,
      cellNum - 1,
      cellNum - rLength,
      cellNum - rLength - 1,
      cellNum + rLength,
      cellNum + rLength - 1,
      cellNum - rLength + 1
    ]);
  }
  return result.filter(val => val < rLength*rLength && val >= 0);
}
export function getNumOfNeighbouringBombs(bombCells, neighbouringCells, i) {
  if (bombCells.indexOf(i) !== -1)
    return "💣";
  else {
    let result = neighbouringCells.reduce(
      (acc, neighbour, ind) => {
        if (bombCells.indexOf(neighbour) !== -1) {
          return acc + 1;
        } else
          return acc;
      },
      0
    );
    return result;
  }
}
export function getRandomBombCells(flags, numberOfCells) {
  let bombCells = [];
  for (let i = 0; i < flags; i++) {
    let rnd = Math.floor(Math.random() * numberOfCells);
    while (bombCells.indexOf(rnd) !== -1)
      rnd = Math.floor(Math.random() * numberOfCells);
    bombCells.push(rnd);
  }
  return bombCells;
}

export function revealNeighbours(ind, neighbours, values) {
  let revealed = [];
  let visited = [];
  function recurse(ind, neighbours, values) {
    if (values[ind] === "💣") {
    } else if ((visited.indexOf(ind) === -1) && values[ind] === 0) {
      visited.push(ind);
      if (revealed.indexOf(ind) === -1) revealed.push(ind);
      let neighs = neighbours[ind];
      for (let j = 0; j < neighs.length; j++) {
        recurse(neighs[j], neighbours, values);
      }
    } else {
      if (revealed.indexOf(ind) === -1) revealed.push(ind);
    }
    return revealed;
  }
  revealed = recurse(ind, neighbours, values);
  return revealed;
}
export function revealBombs(bombCells, clicked) {
  bombCells.forEach(cell => clicked.push(cell));
  return clicked;
}
