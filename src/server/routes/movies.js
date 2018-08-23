const queries = require('../db/queries/movies');

const router = require('koa-router')();
const BASE_URL = '/api/v1/movies';

router.get(BASE_URL, async ctx => {
  try {
    const movies = await queries.getAllMovies();
    ctx.body = {
      status: 'success',
      data: movies
    };
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;