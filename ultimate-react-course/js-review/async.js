// anything an asynchronous code returns is a promise
// because js doesn't know what it will return until it has been fetched

// using fetch() ...normal Promises
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))
console.log('Hello!')

// using async await
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
  const data = await response.json()
  console.log(data)
  // here, data will be a promise
  // as it is returned from an asynchronous function
  return data
}
getData()
