function renderDataTree(array) {
  const helper = function(array) {
    let ul = document.createElement('ul');

    array.forEach(function (item) {
      if ( typeof item === 'string' ) {
        let li = document.createElement('li');

        li.textContent = item;
        ul.append(li)
      } else if ( Array.isArray(item) ) {
        let li = document.createElement('li');
        li.append( helper(item) );
        ul.append( li );
      } else {
        console.log( item + ' has unacceptable type' );
      }
    })

    return ul;
  }

  document.body.append(helper(array));
}

const data = ['item1', 'item2', ['item3', 'item4', 'item5', ['item6']], 5, 'item7'];

renderDataTree(data);