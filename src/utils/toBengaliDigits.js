export const transformToBengaliDigits = (number) => {
  const bengaliDigits = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
    ',': ',',
  };

  const formattedNumber = addCommas(number);

  return formattedNumber
    ?.split('')
    .map((digit) => bengaliDigits[digit] || digit)
    .join('');
};

const addCommas = (number) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
