function renderData(element, dataObj) {
  for ( let i = 0; i < element.children.length; i++ ) {
    if ( dataObj.hasOwnProperty(element.children[i].dataset.field) ) {
      element.children[i].textContent = dataObj[element.children[i].dataset.field];
    } else {
      throw new Error(`${element.children[i].dataset.field} property not found`);
    }
  }
}

const el = document.getElementById('item');

const data = {
  title: 'Hello JS',
  description: 'Everything will be Javascript',
  email: 'mail@example.com'
}

renderData(el, data);