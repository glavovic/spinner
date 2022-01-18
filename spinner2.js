spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n\r']

let x = 100;

for (let spinner of spinners) {
  setTimeout(() => {
    process.stdout.write(spinner)
  }, x += 200);
  
};

