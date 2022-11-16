# Gamenaut Front End

## Deployment

- Deploy to GCP App Engine to dev

  `yarn deploy`

[deployed here](https://gg-app-dev-dot-gamenaut.ue.r.appspot.com)

<br />

### Coding Standards

- Following functional programming style
- Each page must have a defined interface
- Styles for each component / page must be abstracted into .styles
- Any API requests must be abstracted into helpers
- Any environment dependancies must be defined in constants

### Github review process:

- Each PR request must be reviewed by a peer in order to check:
  - The implemented functionality is working as intended
  - Changes did not break old functionality
    - Run end to end test
  - Code is written as efficiently as possible
    - Code must be optimized
    - Logic is clearly abstracted in functions which are descriptively named
  - To check that coding style follows the company coding standards
    - The code is clean
      - No commented out code
      - Spacings are consistent with the overall project
    - In TypeScript code
      - Variables and function names defined in camelCase
      - Class names defined in PascalCase
      - All types are defined - no any types (unless explicitly intended by design)
      - Database variables (table & attribute names) defined in snake_case
      - API request / response variables defined in snake_case
  - Check if code follows repo standards
    - Defined in each repo

### Github etiquette:

- Work locally in your own branch (${NAME}-dev)
  - Commit to your own branch
- Master branch must be built without errors and warnings
- Only merge PRs when running code locally leads to no errors & warnings
- Only merge PRs if e2e testing is successful
- Do not force push!
  - Make a revert commit instead
  - If absolutely necessary use force-with-lease
- Do not commit sensitive data such as API keys and passwords
  - Include sensitive data in .env (which should be included in .gitignore)
- Make frequent commits
  - More commits the better
  - No commit is too short
  - General rule is if you can’t fully describe the change in 72 characters — your commit is too big###
