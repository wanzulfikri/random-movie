function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIMDBId() {
  const MAXLENGTH = 7;
  const number = getRandomInteger(0, 9000000);
  const stringNumber = number.toString();
  const stringLength = stringNumber.length;
  const zeroPads = "0".repeat(MAXLENGTH - stringLength);
  const imdbId = "tt" + zeroPads + stringNumber;
  return imdbId;
}

export default getRandomIMDBId;
