module.exports = {
  checkUAParam: (ua, schema) => {
    const result = schema.safeParse(ua);
    if (!result.success) {
      throw new Error(result.error.message);
    }
    return true;
  },
};
