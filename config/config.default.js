const path = require('path')
const Redis = require('ioredis')

const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: '',
  db: 0
}

exports.keys = 'sbercoininfo-api'

exports.security = {
  csrf: {enable: false}
}

exports.middleware = ['ratelimit']

exports.redis = {
  client: redisConfig
}

exports.ratelimit = {
  db: new Redis(redisConfig),
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total',
  },
  disableHeader: false,
  errorMessage: 'Rate Limit Exceeded',
  duration: 10 * 60 * 1000,
  max: 10 * 60
}

exports.io = {
  redis: {
    ...redisConfig,
    key: 'sbercoininfo-api-socket.io'
  },
  namespace: {
    '/': {connectionMiddleware: ['connection']}
  }
}

exports.sequelize = {
  dialect: 'mysql',
  database: 'sber',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dafno4ka'
}

exports.sbercoin = {
  chain: 'mainnet'
}

exports.sbercoininfo = {
  path: path.resolve('..', 'sbercoininfo'),
  port: 3001,
  rpc: {
    protocol: 'http',
    host:'127.0.0.1',
    port:3889,
    user:'exploreradmin',
    password: 'explorer',
  }
}

exports.cmcAPIKey = null
exports.cors = {origin:'*'}
