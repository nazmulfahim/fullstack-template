const cutText = (text, length) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  } else {
    return text;
  }
};

export default cutText;
