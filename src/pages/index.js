export default [
  {
    name: 'ticket',
    path: '/ticket',
    component(location, cb) {
      require.ensure([], require => {
          cb(null, require('./ticket').default)
      },'ticket')
    }
  },
  {
    name: 'demo',
    path: '/demo',
    component(location, cb) {
      require.ensure([], require => {
          cb(null, require('./demo').default)
      },'demo')
    }
  },
]