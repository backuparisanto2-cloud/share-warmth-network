# Import GitHub repo into current project

## Goal
Bring the codebase from `https://github.com/backuparisanto2-cloud/cheerful-sync-dance.git` into the current Lovable project.

## Background
Lovable does not support directly importing an existing GitHub repo into a project. The workaround is to clone the repo and manually merge its files into the current project.

## Plan
1. Clone the GitHub repo into a temporary directory (`/tmp/github-import`).
2. Inspect the repo structure (framework, dependencies, routes, components, assets, env/config).
3. Compare against the current project structure to identify conflicts.
4. Merge/copy the relevant files into the current project, keeping the existing Lovable bootstrap files (router, root route, config) unless the repo is also a Lovable/TanStack Start project.
5. Install any missing dependencies.
6. Run build/typecheck to verify everything compiles.
7. Report any runtime issues or manual follow-up steps.
