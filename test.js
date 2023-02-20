let test = "test2";
let Test = test.split("");
console.log(Test);
console.log(Test.length);
let i;
for (i = 0; i < test.length; i++) {
  console.count("looping");
  if (!Number(Test[i])) {
    console.log("not a number: " + Test[i] + "\n " + i);
    Test.splice(i, 1);
  }
}
console.log(Test);
