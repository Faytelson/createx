const classNames = (args) => {
  const result = [];

  function collectClasses(args) {
    args.forEach((arg) => {
      if (!arg) return;

      if (typeof arg === "string") {
        result.push(arg);
      } else if (Array.isArray(arg)) {
        collectClasses(arg);
      } else if (typeof arg === "object") {
        Object.entries(arg).forEach(([key, value]) => {
          if (value) result.push(key);
        });
      }
    });
  }

  collectClasses(args);

  return result.join(" ");
};

export { classNames };
