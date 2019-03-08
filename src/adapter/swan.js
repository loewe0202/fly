//百度小程序适配器
module.exports = function(request, responseCallback) {
  var con = {
    method: request.method,
    url: request.url,
    dataType: request.dataType,
    header: request.headers, //header 中不能设置 Referer
    data: request.body || {},
    success: function success(res) {
      responseCallback({
        statusCode: res.statusCode,
        responseText: res.data,
        headers: res.header,
        statusMessage: res.errMsg
      })
    },
    fail: function fail(res) {
      responseCallback({
        statusCode: res.errCode || 0,
        responseText: res.data,
        headers: res.header,
        statusMessage: res.errMsg
      })
    }
  }
  swan.request(con)
}
