import { ILoginResponse } from "../../api/types";
import { LoginData } from "../../components/forms/LoginForm";
import { axios } from "../../lib/apiClient";

export async function fetchTest(): Promise<any> {
  const response = await axios.get("/tickets");

  return response;
}

export async function signin(data: LoginData) {
  const response = await axios.post<ILoginResponse>("/login", data);
  console.log("login response: ", response);
  return response.data;
}

export async function signup(data: unknown) {
  const response = await axios.post<any>("/login", data);
  console.log("login response: ", response);
  return response.data;
}
