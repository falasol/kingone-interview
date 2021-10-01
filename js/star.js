const printDiamond = (length) => {
  let starCount = 1;
  while (starCount <= length) {
    printDiamondRow(starCount, length);
    starCount += 2;
  }
  starCount -= 4;
  while (starCount > 0) {
    printDiamondRow(starCount, length);
    starCount -= 2;
  }
};

const printDiamondRow = (starCount, length) => {
  let rowText = "";
  for (let i = 0; i < (length - starCount) / 2; i++) {
    rowText += " ";
  }
  for (let i = 0; i < starCount; i++) {
    rowText += "*";
  }
  console.log(rowText);
};

printDiamond(5);
