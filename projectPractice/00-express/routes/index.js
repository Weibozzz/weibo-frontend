var express = require('express');
var axios = require('axios');
var router = express.Router();

function getdaily({ url }){
  // https://github.com/MZCretin/RollToolsApi
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      headers: {
        app_id: 'bjfkpkmoimm7bnrh',
        app_secret: 'emQ1MXh5M1ZqdzNYTmloOHNxalJpdz09'
      }
    }).then(res => {
      resolve(res.data)
    })
  });
}
// 解决跨域
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/jsonp', async function (req, res, next) {
  res.send('mycallBack(["zhangsan","lisi","zhaoliu"])')
})
router.post('/daily', async function (req, res, next) {
  try {
    const result = await getdaily(req.body)
    res.send({
      success: result
    })
  } catch (error) {
    res.send({
      failure: error,
    })
  }
})

router.get('/daily', async function (req, res, next) {
  try {
    const result = await getdaily(req.query)
    res.send({
      success: result
    })
  } catch (error) {
    res.send({
      failure: error,
    })
  }
})
const tagData = [
  {
    index: 1,
    name: '全部文章',
    href: 'http://www.baidu.com',
    target: false,
  },
  {
    index: 20,
    name: 'js',
  },
  {
    index: 20,
    name: 'react',
  },
]
router.get('/tag', async function (req, res, next) {
  res.send({
    success: tagData
  })
})
router.post('/tag', async function (req, res, next) {
  res.send({
    success: tagData
  })
})
router.get('/form', async function (req, res, next) {
  res.send({
    success: req.query
  })
})
router.post('/form', async function (req, res, next) {
  res.send({
    success: req.body
  })
})
module.exports = router;
