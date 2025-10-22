const publicPath = (base = "images/") => {
  const prefix = import.meta.env?.BASE_URL ?? "/";
  return (filename: string) => `${prefix}${base}${filename}`;
};

export { publicPath };
