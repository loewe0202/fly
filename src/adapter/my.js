//支付宝小程序适配器
module.exports = function(request, responseCallback) {
  var con = {
    method: request.method,
    url: request.url,
    dataType: request.dataType,
    headers: request.headers,
    data: request.body || {},
    success: function success(res) {
      responseCallback({
        statusCode: res.status,
        responseText: res.data,
        headers: res.headers,
        statusMessage: res.error
      })
    },
    fail: function fail(res) {
      responseCallback({
        statusCode: res.status || 0,
        responseText: res.data,
        headers: res.headers,
        statusMessage: res.error
      })
    }
  }
  if (my.canIUse('request')) {
    my.request(con);
  } else {
    my.httpRequest(con);
  }
}
