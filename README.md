# lightbench

[![npm package](https://nodei.co/npm/lightbench.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lightbench/)

Easy code execution time checking.

### Installation:
```
npm i lightbench
```

### Connectivity:
```javascript
const lightbench = require('lightbench')
```

## Usage

### Synchronous code check:
```javascript
lightbench(func, callback)
```

 - `func` - Function for testing
 - `callback` - The function that will be called after the test function is completed. The argument will be passed the execution time in milliseconds.
 
#### Example:
```javascript
const lightbench = require('lightbench')

lightbench(() => {
	for (let i = 0; i < 1000; i++) {
		console.log(i)
	}
}, (ms) => console.log(`Result: ${ms} ms`))
```

### Synchronous code check:
```javascript
lightbench()(func, callback)
```

 - `func` - Function for testing. In the argument, a callback is sent, which must be executed after the asynchronous code is completed.
 - `callback` - The function that will be called after the test function is completed. The argument will be passed the execution time in milliseconds.
 
#### Example:
```javascript
const lightbench = require('lightbench')

lightbench()((end) => {
	setTimeout(end, 1500)
}, (ms) => console.log(`Result: ${ms} ms`))
```

