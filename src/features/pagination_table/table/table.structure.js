export function createTableStructure(total = 50, limit = 50, colCount = 5) {
  let structure = {}
  structure.colCount = colCount;
  structure.limit = limit;
  structure.total = total;
  structure.tableElements = {};

  const pageNumber = Math.ceil(total / 50);
  let rowIndex = 1;
  for (let i = 0; i < pageNumber; i++) {
    const pageName = i + 1;
    let reachingLimit = 0;
    for (;total > 0 && reachingLimit < limit;) {
      for (let k = 0; k < colCount && total > 0 && reachingLimit < limit; k++) {
        structure['tableElements'][pageName+":"+rowIndex+":"+k] = '';
        total--;
        reachingLimit++;
      }
      rowIndex++;
    }
  }

  return structure;
}
