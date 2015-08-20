const wayfarer = require('wayfarer')

const router = wayfarer()

router.on('/v1/collapse', function (params) {
  console.log('params')
})

router('/v1/collapse')
