// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/index-1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-kuk', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-kuk', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-ban', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-ban', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-lem', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-lem', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-cof', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-cof', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-fran', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-fran', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/index-1-parm', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index-1-parm', {
    layout: 'default',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
