const bcrypt = reqiure("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(11);
  return bcrypt.hashSync(password, salt);
}

const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
  hashPassword,
  comparePassword
}