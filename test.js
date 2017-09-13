const lightbench = require('./main.js')

lightbench(() => {
	for (let i = 0; i < 1000; i++) {
		console.log(i)
	}
}, (ms) => console.log(`Result: ${ms} ms`))

lightbench()((end) => {
	setTimeout(end, 1500)
}, (ms) => console.log(`Result: ${ms} ms`))