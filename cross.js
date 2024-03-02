let start = new Map();

start.set(0, "marudhu");
start.set(-1, "Nayanthara");
start.set(-2, "thanks for choose made for each other");

let data = [...start.keys()].sort((a, b) => a - b);

for (let does of data) {
  console.log(start.get(does));
}
