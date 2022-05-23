var args = process.argv.slice(2)

const fib = (n) => {
     if(n == 0) return 0
     if(n == 1) return 1
     return fib(n - 1) + fib(n - 2)
}

setTimeout(()=>{
   args.map((n) => {
     console.log(`Fibonacci of ${n} :`,fib(Math.abs(n)))
   }) 
}, 0)

