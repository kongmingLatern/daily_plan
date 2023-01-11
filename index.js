const { Octokit } = require('octokit')
const core = require('@actions/core')
const dayjs = require('dayjs')

const token = core.getInput('token')
const octokit = new Octokit({
  auth: token,
})

octokit.rest.issues.create({
  owner: 'kongminglatern',
  repo: 'daily_plan',
  title: getTitle(),
  body: getBody(),
})

function getTitle() {
  // 调整成中国时间,否则在虚拟机里运行的是 UTC
  return dayjs().add('8', 'hour').format('YYYY-MM-DD')
}

// 2023-01-11 你学习了哪些知识

function getBody() {
  return `## ${getTitle()}

  **1. 你学习了哪些知识？**

  **2. 学习过程中是否有存在的问题？**

  ## 关于如何写每日任务：

  [如何写每日任务](https://github.com/kongmingLatern/daily_plan/blob/main/README.md)

    `
}
