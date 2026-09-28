export function rot13(value) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  return value.replace(/[A-Za-z]/gu, c => {
    const n=c.charCodeAt(0), base=n>=97?97:65;
    return String.fromCharCode(((n-base+13)%26)+base);
  });
}
