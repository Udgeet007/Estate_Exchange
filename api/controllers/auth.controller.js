import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);

  //Hashing the password
  //Create new User and save to DB
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
};

export const login = (req, res) => {
  //db operations.
};

export const logout = (req, res) => {};
