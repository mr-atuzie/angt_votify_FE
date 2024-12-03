export const shortenText = (text, n) => {
  if (text.length > n) {
    const editText = text.substring(0, n).concat("...");
    return editText;
  }

  return text;
};

export const formatter = (price) => {
  return new Intl.NumberFormat().format(price);
};

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
