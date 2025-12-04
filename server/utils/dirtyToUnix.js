const dirtyToUnix = (dirty) => {
  const clean = dirty.split("[")[0];
  const unix = new Date(clean).getTime();
  return unix;
};

export default dirtyToUnix;
