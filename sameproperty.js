// 1. how to compare 2 JSON have the same properties without order?
const obj1 = {
    name: 'Person1',
    age: '5'
  };
      
  const obj2 = {
    age: '5',
    name: 'Person1'
  };
      
if (JSON.stringify(obj1) === JSON.stringify(obj2))
  console.log("true");
else
  console.log("false");


