### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Then/catch chaining and async/await method
- What is a Promise?
It's a type of code that will return as completed or failed on event 
- What are the differences between an async function and a regular function?
regular functions run simultaneously and async function is a blocking technique
- What is the difference between Node.js and Express.js?
Express relies on node
- What is the error-first callback pattern?
it's where you put the error code first and then the other code
- What is middleware?
it allows code to run other code before finishing
- What does the `next` function do?
It allows the code to move on.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
