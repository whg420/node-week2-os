#! /usr/bin/env node

let os = require("os")
console.log("操作平台=====" + os.platform())//操作平台
console.log("平台类型=====" + os.type())//平台类型
console.log("用户信息=====" + os.userInfo())//用户信息
console.log("cpu架构=====" + os.arch())//cup架构
console.log("系统主机名====" + os.hostname())//系统主机名
console.log("系统总内存=====" + os.totalmem())//系统总内存
console.log(os.cpus())
let title = []
let data = []
os.cpus().map((item, index) => {
  title.push("cup" + (+index + 1))
  data.push(item.times.user)
})
console.log(title, data)
setTimeout(() => {
  let blessed = require('blessed'), contrib = require('blessed-contrib'),
    screen = blessed.screen(),
    line = contrib.line(
      {
        style:
        {
          line: "yellow"
          , text: "red"
          , baseline: "black"
        }
        , xLabelPadding: 5
        , xPadding: 5
        , label: 'Title'
      })

  let bar = contrib.bar(
    {
      label: 'Server Utilization (%)'
      , barWidth: 4
      , barSpacing: 6
      , xOffset: 0
      , maxHeight: 9
    })
  screen.append(bar) //must append before setting data
  bar.setData(
    {
      titles: title
      , data: data
    })
  screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
  });

  screen.render()
}, 8000)
