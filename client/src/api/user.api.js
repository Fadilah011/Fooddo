import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  login: "user/login",
  register: "user/register",
  getInfo: "user/info",
};

const userApi = {
  signin: async ({ email, password }) => {
    try {
      console.log("send request");
      const response = await publicClient.post(
        userEndpoints.login,
        { email, password }
      );

      return { response };
    } catch (err) { console.log("err"); return { err }; }
  },
  signup: async ({ username, password, confirmPassword, }) => {
    try {
      const response = await publicClient.post(
        userEndpoints.register,
        { username,
          email,
          password,
          confirmPassword,
          role,
          phoneNumber,}
      );

      return { response };
    } catch (err) { return { err }; }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) { return { err }; }
  },
}

export default userApi;