const takeShowers = () => {
  return "Showering!";
};

const eatBreakfast = () => {
  let meal = cookFood();
  return `Eating ${meal}`;
};

const cookFood = () => {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
};

const wakeUp = () => {
  takeShowers();
  eatBreakfast();
  console.log("Ok ready to go to work!");
};

wakeUp(); // add a breakpoint here and use the debugger to step through the code. Look at the call stack section and how the functions are being called.
