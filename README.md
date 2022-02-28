 Workflow 2 Course Assignment

## Brief

Configure the project to use Jest with Babel. Lesson 2 of Module 2 contains instructions to do this.

The lesson also contains instructions on adding TypeScript support for Jest.

You will need to create and configure a package.json file and install all neceessary dependencies.

Remember to add the appropriate entries to a `.gitignore` file.

Use Parcel as the bundler.

```
parcel index.html
```

## Level 1

### Question 1

Convert all the functions in `scripts/helpers/stringHelpers.js` to TypeScript.

### Question 2

Convert the function in `scripts/helpers/objectHelpers.js` to TypeScript.

Create an interface to be used for the arguments and return value of the function.

### Question 3

Convert `scripts/index.js` to TypeScript. Use the interface from question 2 as the type of the `newProduct` variable.

### Question 4

Write passing tests for all the functions found in `scripts/helpers/stringHelpers.js` and `scripts/helpers/objectHelpers.js`.

### Question 5

Find a free GraphQL API.

In `scripts/query.js` make a GraphQL API call that returns an array of results.

Use a lodash method to sort the results on a field in descending order.

Loop through the results and create HTML for the results using at least 2 object properties. Attach the HTML to `div.results.`

Style the HTML using Sass.

You can write the answer for this question in either JavaScript or TypeScript.
