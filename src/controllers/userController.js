export const HelloWorld = async (_req, resp) => {
  return resp.json({ msg: "Hello World" });
};
