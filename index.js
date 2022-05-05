// remove the <main> with id 'main' (main#main)
const elem1 = document.querySelector('main#main');
elem1.remove();
// console.log(elem1)
// const bodyEl = document.querySelector('body');
// bodyEl.append(elem1);

// has a 'newHeader' variable that points to node 'h1#victory'"
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
//console.log(newHeader);
//console.log(newHeader.nodeName);

//"Make sure you create an <h1> with id 'victory'"
//  expect(newHeader.nodeName, 

// "has a 'newHeader' variable that points to node 'h1#victory'"
//"Make sure you create an <h1> with id 'victory'").eql('victory')
//  expect(newHeader.id, 

newHeader.textContent = 'YOUR-NAME is the champion';
console.log(newHeader);
// "has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside"
// expect(newHeader.innerHTML
// "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");