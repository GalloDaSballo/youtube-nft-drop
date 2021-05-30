/**
 * Given text, url escape it
 * Credits to: https://meyerweb.com/eric/tools/dencoder/
 * @param {string} text
 */
export const encode = (text: string): string => {
  return encodeURIComponent(text).replace(/'/g, "%27").replace(/"/g, "%22");
};
export const getLink = (text: string) =>
  text?.indexOf("http") > -1
    ? text
    : `https://gateway.pinata.cloud/ipfs/${text}`;
