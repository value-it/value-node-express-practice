const express = require('express')
const app = express()

const server = app.listen(8000, function () {
    console.log('🚀 app started. port:' + server.address().port)
})

/**
 * GET /
 */
app.get('/', async function (req, res, next) {
    console.log('/index called')
    res.send('/index called')
})

/**
 * GET /test
 */
app.get('/test', async function (req, res, next) {
    console.log('/test called')
    res.send('/test called')
})

/**
 * GET /sleep5
 * ただ10秒待ってレスポンス
 */
app.get('/sleep5', async function (req, res, next) {
    console.log('/sleep5 start')
    await new Promise(resolve => setTimeout(resolve, 10000))
    console.log('/sleep5 finish')
    res.send('/sleep5 done')
})
