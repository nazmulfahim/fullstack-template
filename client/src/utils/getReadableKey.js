const getReadableKey = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1).replace(/\_/g, ' ');

export default getReadableKey;
