const checkUsersValues = (...args) => {
  return args.every((value) => {
    if(!value) throw new Error(`Not valid value ${value}`);
    return true;
  })
};

module.exports = {
  checkUsersValues
}