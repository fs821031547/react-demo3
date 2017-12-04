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
]