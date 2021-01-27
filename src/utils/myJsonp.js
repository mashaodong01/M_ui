export default function jsonp(url, data, callback) {
    let dataString = url.indexOf('?') == -1 ? '?' : '&';
    for (let key in data) {
        dataString += key + '=' + data[key] + '&'
    }

    const cbFuncName = 'my_jsonp_cb_' + Math.random().toString().replace('.', '');
    dataString += 'callback=' + cbFuncName;

    var scriptEle = document.createElement('script');
    scriptEle.src = url + dataString;

    window[cbFuncName] = function(data) {
        callback(data);
        document.body.removeChild(scriptEle);
    }
    document.body.appendChild(scriptEle);
}