export function validateInput(input) {
    if (Number.isNaN(Number(input))) {
      return 1;
    } else {
      return undefined;
    }
  }