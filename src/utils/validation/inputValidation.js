const validateName = (name) => {
  if (name.length > 50) {
    return "Длина имени должна быть до 50 символов";
  }

  return null;
};

export { validateName };
