export default [
  {
    name: 'test',
    path: '/test',
    component(location, cb) {
      require.ensure([], require => {
          cb(null, require('./test').default)
      },'test')
    }
  },
]