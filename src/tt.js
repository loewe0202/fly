//头条小程序入口
var _Fly = require("./fly")
var EngineWrapper = require("./engine-wrapper")
var adapter = require("./adapter/tt")
var myEngine = EngineWrapper(adapter)
module.exports = function(engine) {
  return new _Fly(engine || myEngine);
}