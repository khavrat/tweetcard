function formatNumberWithCommas(num) {
  const numString = num.toString();
  const numLength = numString.length;
  let result = "";
  for (let i = 0; i < numLength; i++) {
    if (i !== 0 && (numLength - i) % 3 === 0) {
      result += ",";
    }
    result += numString[i];
  }
  return result;
}

export default formatNumberWithCommas;
