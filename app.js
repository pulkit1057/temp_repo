
const _ = require('lodash')

const arr = [1,[2,[3,[4]]]]

const new_arr = _.flattenDeep(arr)
console.log(new_arr);