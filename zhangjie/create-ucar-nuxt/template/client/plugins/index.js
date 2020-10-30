import axios from 'axios';

async function request({ uri, method = 'get', ac = 0, data }, baseUrl) {
  const url = `${baseUrl}${uri}`;
  let result = null;
  axios.defaults.headers.ac = ac;
  if (method.toLowerCase() === 'get') {
    result = await axios.get(url, { params: data });
  } else {
    result = await axios.post(url, data);
  }

  if (result.status === 200) {
    return result.data;
  }
  return {
    msg: '前端服务异常',
    status: 0,
  };
}

async function uploadFile(files, baseUrl) {
  const params = new FormData();
  [...files].map((file) => params.append('file', file));
  const result = await axios.post(`${baseUrl}/action/base/uploadFile`, params);
  if (result.status === 200) {
    return result.data;
  }

  return {
    msg: '前端服务异常',
    status: 0
  };
}

export default ({ env }, inject) => {
  const baseUrl = env.baseUrl;
  inject('request', (params) => request(params, baseUrl));
  inject('uploadFile', (files) => uploadFile(files, baseUrl));
};
