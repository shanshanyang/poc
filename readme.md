# Brand Project Repo Setup Idea: 

  - A project (2017 FashionShow Angel Lineup or Runway-insider) is work that has its own production release cycle, it’s deployable artifact may or may not be standard alone.
  - A project can be a story of an Epic or the Epic itself.
  - Brand repository is organized by JIRA Component (2017 Fashionshow Campaign) > JIRA Epics (2017 Fashionshow Main Page).
  - JIRA Epic (2017 Fashionshow Main Page) has ONE deployable artifact package.
  - JIRA Epic (2017 Fashionshow Main Page) artifact maintains one Version at any given time.
  - Inside JIRA Epic (2017 Fashionshow Main Page), each project has its own folder, all project versions of the Epic is managed by LernaJS.
  - Inside each Project folder, that’s where developer run local server, write / commit code (Developer is not able to view the Epic while developing, example: fs main with all projects).

## Example:

~~~
Brand Repo
    -> .editorconfig
    -> Prototype
        -> 2017 Home Page Carousel Animate on Scroll
            -> src
            -> webpack.config.js
            -> package.json
            -> yarn.lock
    -> BWI Platform Integration Middleware
        -> metrics 
            -> package.json
        -> UU
            -> package.json
    -> 2017 Fashionshow 
        -> 2017 Fashionshow Main Page
            -> packages
                -> Angel Line Up
                    -> .gitignore
                    -> yarn.lock
                    -> package.json
                    -> src
                    -> webpack.config.js
                -> Load More
                -> Musical Guest
                -> Splash Screen
                -> Metrics OverWrite
                -> CSS Fix
            -> package.json (Artifact is built with nav, all packages, and npm install dependency diva page parser component)
            -> yarn.lock
            -> lerna.json
            -> .gitignore
        -> 2017 Fashionshow Runway Insider Page
            -> app
                -> package.json (Artifact is built with nav, and src)
                -> src
                -> yarn.lock                   
                -> webpack.config.js
                -> .gitignore
        -> 2017 Fashionshow Watch Page
            -> Packages
                -> Metrics Overwrite
                -> CSS Fix
            -> package.json (Artifact is built with nav, and all packages)
            -> yarn.lock
            -> lerna.json
        -> Header
            -> Nav
    -> 2017 Pink Header
        -> src
        -> yarn.lock
        -> webpack.config.js
        -> .gitignore
    -> 2017 Australia Ad Unit
        -> src
        -> yarn.lock
        -> index.html
        -> package.json
~~~

# Assumptions:
- Demo projects do NOT care about project detail
- Demo projects should satisfy the requirments 
- Demo projects are evaluating the JIRA/Stash flow (BWI production team collabration), tools required to complete the flow, the capability of fitting all types of BWI projects in this format. 

## FS Main Demo Idea
FS Main is the only project that require multiple projects in an Epic. 

The requirements are: 
- [x] View / Test individual project locally
- View / Test FS main page with all individual project built in locally
- Build deployable artifact of the entire FS main page
- [x] Build deployable artifact of individual project

Demo steps:
- [x] Develop 360-viewer within it's folder follow this workflow: https://confluence.victoriassecret.com/display/DXSP/Workflow+-+New+Project+Demo
- [x] Develop angel-lineup within it's folder follow this workflow: https://confluence.victoriassecret.com/display/DXSP/Workflow+-+New+Project+Demo
- Review FS main Epic locally 
- Run `yarn build` to create deployable artifact of FS main page
- Deploy to diva to validate 

## FS Runway-insider Demo Idea
Runway-insider is a project == Epic.

The requirements are: 
- [x] View / Test project locally
- [x] Build deployable artifact

Demo steps:
- Develop the SPA with routing
- Review work locally
- Run `yarn build` to create deployable artifact of FS main page
- Deploy to diva to validate
