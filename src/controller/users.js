// var errorcode = require('../common/config.js').errorcode;

const apis = {
    test(req, res) {
        res.send({ status: 0, msg: '操作成功', data: null }); // 此处为正常返回请求示例
    }
}

module.exports = apis
