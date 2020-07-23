export const leftPadZero = (number = 0) => number.toString().padStart(2, '0');

export const roundToCent = (number = 0) => Math.round((number + Number.EPSILON) * 100) / 100;
