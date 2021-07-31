function renderData(element, dataObj) {
  for (let i = 0; i < element.children.length; i++) {
    element.children[i].textContent = dataObj[element.children[i].dataset.field];
  }
}

const el = document.getElementById('item');

const data = {
  title: 'Hello JS',
  description: 'Everything will be Javascript',
}

renderData(el, data);