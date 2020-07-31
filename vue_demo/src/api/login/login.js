import {
  resourceRequest
} from "@/api/api";
import store from '@/store'
export function login(params) {
  return resourceRequest({
    method: "get",
    url: "Login",
    params: params,
  });
}


export function getValue() {
  return resourceRequest({
    method: "get",
    url: "Login/GetValue",
    headers: {
      'Authorization': store.state.auth.token
    },
  });
}


export function postValue() {
  return resourceRequest({
    method: "post",
    url: "Login/Post",
    headers: {
      'Authorization': store.state.auth.token
    },
  });
}