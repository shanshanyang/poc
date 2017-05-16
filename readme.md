# Brand Project Repo Setup Idea: 

  - A project (2017 FashionShow Angel Lineup) is work that has its own production release cycle, it’s deployable artifact may or may not be standard alone.
  - Brand repository is organized by JIRA Component (2017 Fashionshow Campaign) > JIRA Epics (2017 Fashionshow Main Page)
  - JIRA Epic (2017 Fashionshow Main Page) has ONE deployable artifact package
  - JIRA Epic (2017 Fashionshow Main Page) artifact maintains one Version at any given time
  - Inside JIRA Epic (2017 Fashionshow Main Page), each project has its own folder, all project versions of the Epic is managed by LernaJS
  - Inside each Project folder, that’s where developer run local server, write / commit code (Developer is not able to view the Epic while developing, example: fs main with all projects)

## Example:

~~~
Brand Repo
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