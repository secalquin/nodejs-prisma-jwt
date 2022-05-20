export const HelloWorld = async (_req, resp) => {
  return resp.json({ msg: "Hello World" });
};

export const LoginIn = async (req, resp) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return resp.status(400).json({ msg: "User not found" });
  }

  if (!(await user.compareHash(password))) {
    return resp.status(400).json({ msg: "Password does not match" });
  }

  return resp.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token: jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    }),
  });
};
