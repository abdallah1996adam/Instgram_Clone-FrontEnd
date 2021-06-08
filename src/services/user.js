import api from "./api";

const userService = {
  signup: async (name, email, password) => {
    const user = { name, email, password };
    return await api.post("register", user);
  },
  login: async (email, password) => {
    const data = { email, password };
    return await api.post("signin", data);
  },
};

export default userService;
