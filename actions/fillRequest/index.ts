import * as core from "@actions/core"
import * as github from "@actions/github"


    async function fill() {

        const token = core.getInput("token");

        const credentials = {
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
        };

        const octokit = github.getOctokit(token);




        const fs = require('fs')
        const ev = JSON.parse(
        fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
        )
        console.log(ev)
        const prNum = ev.pull_request.number

        // const info = core.getInput("pullRequestInfo")

        //console.log(`Hello to new pull request + ${token}`)
        console.log(`Hello to new pull request`)

    }

    fill()