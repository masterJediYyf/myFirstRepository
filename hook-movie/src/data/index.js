var Mock = require('mockjs')
var data = Mock.mock('/mock', {
  "userinfo|4": [{
    "id|+1": 1,
    "name": "@cname",
    "age|18-28": 25
  }]
})

export default data;