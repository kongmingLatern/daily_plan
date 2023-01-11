const { Octokit } = require('octokit')
const core = require('@actions/core')
const dayjs = require('dayjs')

const token = core.getInput('token')
const octokit = new Octokit({
  auth: token,
})

octokit.rest.issues.create({
  owner: 'cuixiaorui',
  repo: 'teach-create-issues-action',
  title: getTitle(),
  body: getBody(),
})

function getTitle() {
  return dayjs().format('YYYY-MM-DD')
}

function getBody() {
  return '[如何写每日任务](https://github.com/cuixiaorui/study-every-day/blob/main/sed/daily-task.md)'
}
