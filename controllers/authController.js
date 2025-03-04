import userModel from "../models/userModel.js";
export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and must be greater than 6 character");
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email already exist Please login");
  }
  const user = await userModel.create({ name, email, password });
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user,
  });
};
