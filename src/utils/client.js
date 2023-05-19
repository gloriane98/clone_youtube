import axios from "axios";
import { auth } from "../firebase";

const authAxios = async () => {
  const idToken = await auth.currentUser?.getIdToken();
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  // console.log(instance.options)
  return instance
};

export default authAxios