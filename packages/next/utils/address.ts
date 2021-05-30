export const storeAddressInCache = (address: string): void => {
  try {
    localStorage.setItem("address", address);
  } catch (err) {}
};

export const getAddressInCache = (): string | null => {
  try {
    const item = localStorage.getItem("address");
    return item;
  } catch (err) {}
};
