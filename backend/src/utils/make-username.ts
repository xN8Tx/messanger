const makeUsername = (email: string) => {
  const username = email.split('@').shift();

  return username;
};

export default makeUsername;
