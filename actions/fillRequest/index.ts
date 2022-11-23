import * as core from "@actions/core"
import * as github from "@actions/github"


    async function fill() {

        const token = core.getInput("token");
        const tasks = core.getInput('tacks_numbers');

        console.log("parameters = " + tasks);

        const credentials = {
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
        };

        const octokit = github.getOctokit(token);


        const fs = require('fs')
        const ev = JSON.parse(
        fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
        )


        await octokit.rest.pulls.update({
            ...credentials,
            pull_number: ev.pull_request.number,
            body: prepareLinks(tasks.split(","))
        })
        



        // const info = core.getInput("pullRequestInfo")

        //console.log(`Hello to new pull request + ${token}`)
        console.log(`Hello to new pull request`)

    }

    function prepareLinks(ids : String[]){
        const links = ids.map(id => `[${id}](https://agroclub.atlassian.net/browse/${id})`)

        return links.join("\\n")


    }

    fill()