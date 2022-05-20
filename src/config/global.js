const Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET: process.env.JWT_SECRET || "secret-key",
  TOKEN_EXPIRATION_HOURS: process.env.TOKEN_EXPIRATION_HOURS || "24",
};

export default Config;
