# Frontend application for the osqleadren.se website

## Installation

### Requirements
* Node v.10.16.3
* Yarn pkg manager
* Gatsby cli

### Steps
1. Clone the git repo to a folder on your local computer `git clone git@github.com:osqledaren/osqledaren-frontend.git`
2. Install packages `cd osqledaren-frontend && yarn`
3. Run gatsby in development mode `yarn start`

## Project structure

### Atomic Design Methodology
The comonents are structured in the `/src` folder according to the "Atomic Design Methodology" by Brad Frost. Read more [here](http://atomicdesign.bradfrost.com/chapter-2/)

Put all components in the corresponding folder: 
* `/src/atoms`
* `/src/molecules`
* `/src/organisms`
* `/src/templates`

The `/src/pages` folder is a bit special, but fits well into the atomic design structure. Gatsby will create a new page for each file in this folder that exports a react component. This is how to create basic routing.

Pages can also be generated programmatically.

### Styling
Still not decided...