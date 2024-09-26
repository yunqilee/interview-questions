function get(obj, path, defaultValue = undefined) {
  const pathArray = Array.isArray(path) ? path : path.split(".");
  return (
    pathArray.reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj) || defaultValue
  );
}
