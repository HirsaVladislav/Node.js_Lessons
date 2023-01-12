const array = [{ id: 1}, { id: 2}, { id: 3, name: 'My name'}, { id: 4}, { id: 5}];

const id = 3;
const findId = (id, array) => {
    return array.find(obj => obj.id === id);
} 
console.log(findId(id, array));

