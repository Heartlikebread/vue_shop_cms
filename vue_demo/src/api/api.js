import axios from 'axios'


const _resourceApiUrl = process.env.VUE_APP_RESOURCE_API_URL

function responseErrorHandle(error) {
  alert(error)
  return Promise.reject(error)
}



// resource
const _resourceRequest = axios.create({
  baseURL: _resourceApiUrl
})
_resourceRequest.interceptors.response.use(
  response => response,
  responseErrorHandle
)


// for resource api
export const resourceRequest = _resourceRequest