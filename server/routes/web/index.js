module.exports = app => {
    const router = require('express').Router();
    let data = [
        {id:1,name:2}
    ]
    // 导入新闻数据
    router.get('/init', async (req, res) => {
      res.send(data)
    })
    app.use('/web/api', router)
  }