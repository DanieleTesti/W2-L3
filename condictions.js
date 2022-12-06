const boy = {
  name: "John",
  age: 20,
};

if (boy.age > 16) {
  if (boy.name === "John") {
    console.log(boy.name, "PUOI ENTRARE");
  }
} else if (boy.age < 16 && boy.age > 10) {
  if (boy.name === "John") {
    console.log(boy.name, "TORNA TRA UN PO");
  }
} else {
  console.log("TORNA DA MAMMA!!");
}
