// import * as core from "@actions/core"
// import * as github from "@actions/github"
    const core = require("@actions/core")

    async function fill() {

        //const token = core.getInput("token");

        // const info = core.getInput("pullRequestInfo")

        //console.log(`Hello to new pull request + ${token}`)
        console.log(`Hello to new pull request`)

    }

    fill()