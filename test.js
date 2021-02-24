function getAlphabet() {
  return ["a", "b"];
}

const itemOne = getAlphabet()[0];
const itemTwo = getAlphabet()[1];

const [firstItem, secondItem] = getAlphabet();

console.log(firstItem, secondItem);
console.log(itemOne, itemTwo);
