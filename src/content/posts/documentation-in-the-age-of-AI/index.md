---
title: Documentation in the age of AI
date: 2025-10-26
description: With MCPs like unblocked, and agent.md files, where do docs for us humans come in?
tags:
  - blog
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: MCPs, unblocked, AI, artificial intelligence, documentation
draft: true
---
## A change in convention
The world we live in now has rapidly changing conventions when it comes to software development. So how do we make sure we keep documentation for AI and humans simple and not cause bloated folders full of random markdown files.

Two years ago the average developer would not have thought about the need to make sure their documentation was usable by AI in order to get the context it needed to help them create a Github Issue so that Github Copilot could attempt to solve the issue in the background, while they were using Cursor leveraging Unblocked to implement a completely different feature.

_But here we are_

## Agents.md
### Where did it come from?
Pre-May 2025 every AI company in town had its own was of configuring instructions for its agents:

- **Cursor**: `.cursorrules`
- **Claude Code**: `CLAUDE.md`
- **Gemini CLI**: `GEMINI.md`
- **Windsurf**: `.windsurfrules`
- **Cline**: `.clinerules`
- **Replit**: `.replit.md`
- **GitHub Copilot**: `.github/copilot-instructions.md`

This was a bit of a problem because it meant if there was a project which had multiple contributors all using different coding agents you could get around 7 different instruction md files polluting your codebase. 

<img src="https://imgs.xkcd.com/comics/standards.png">[xkcd: Standards](https://xkcd.com/927/)

So in May 2025 Sourcegraph in an attempt to not to add more fuel to the fire and create the 8th competing standard they proposed a unified standard [AGENT.md](https://ampcode.com/news/AGENT.md), a singular (foreshadowing) file for all the Agents to use and stop people having to maintain 7 different config files.

And then naturally in Mid 2025 Open AI created their own AGENTS.md (plural) standard which so there were two competing generic solutions to the multiple config problem.

However, In August 2025 Sourcegraph announced they would switch to the AGENTS.md format to align with OpenAI standard and balanced was restored.

So, in five months, the engineering world went from a config per agent to a generic solution to two competing generic solutions and back to one generic solution again. 

### What does an AGENTS.md file look like?
[AGENTS.md](https://agents.md/#examples) provides an example file:
```
# Sample AGENTS.md file

## Dev environment tips
- Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`.
- Run `pnpm install --filter <project_name>` to add the package to your workspace so Vite, ESLint, and TypeScript can see it.
- Use `pnpm create vite@latest <project_name> -- --template react-ts` to spin up a new React + Vite package with TypeScript checks ready.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.

## Testing instructions
- Find the CI plan in the .github/workflows folder.
- Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package.
- From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.
- To focus on one step, add the Vitest pattern: `pnpm vitest run -t "<test name>"`.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions
- Title format: [<project_name>] <Title>
- Always run `pnpm lint` and `pnpm test` before committing.
```

and some quick tips on how to use it:

> [!NOTE] Example from Agents.md website
> ### 1. Add AGENTS.md
> Create an AGENTS.md file at the root of the repository. Most coding agents can even scaffold one for you if you ask nicely.
> ### 2. Cover what matters
> Add sections that help an agent work effectively with your project. Popular choices:
> - Project overview
> - Build and test commands
> - Code style guidelines
> - Testing instructions
> - Security considerations
> ### 3. Add extra instructions
> Commit messages or pull request guidelines, security gotchas, large datasets, deployment steps: anything you’d tell a new teammate belongs here too.
> ### 4. Large monorepo? Use nested AGENTS.md files for subprojects
> Place another AGENTS.md inside each package. Agents automatically read the nearest file in the directory tree, so the closest one takes precedence and every subproject can ship tailored instructions. For example, at time of writing the main OpenAI repo has 88 AGENTS.md files.

And from a quick glance it seems like the answer to, _how do we keep documentation for AI and humans simple and not cause bloat?_ Is to just structure your agents.md file in a way that both humans and agents can use.

## Why we shouldn't just structure our agents.md files in a way that both humans and agents can use

