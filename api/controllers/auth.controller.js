import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);
  try {
    //Hashing the password
    //Create new User and save to DB
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //Create new User and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json("Failed to Create User!");
  }
};

export const login = async(req, res) => {
  //db operations.
  const { username, password } = req.body;
  try {
    //Check if The User Exists
    const user = await prisma.user.findUnique({
      where:{username}
    })
    if(!user) return res.status(401).json({message:"Invalid Credentials!"});
    //Check if the passwrod is correct.
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid) return res.status(401).json({message:"Invalid Credentials!"});
    //Generate cookie token and send to the user.
  } catch (err) {
    console.log(first);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = (req, res) => {};
