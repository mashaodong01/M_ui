let xhr = null;
export default function request(url, isAbort) {
  if (xhr != null && isAbort) { // 如果取消掉上次请求
    xhr.abort();
  }
  return new Promise((resolve, reject) => {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (res) {
      if (xhr.readyState === 4) {
        if ((xhr.status === 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(res);
        } else {
          reject(`unsuccessful:${xhr.status}`);
        }
      }
    };
    xhr.send(null);
  });
}
