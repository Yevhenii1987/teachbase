function renderDataTree(array) {
  const parent = document.createElement('ul');

  const helper = function() {
    array.forEach(function (item) {
      if ( Array.isArray(item) ) {
        helper(item);
      } else if ( typeof item === 'string' ) {
        const li = document.createElement('li');
      } else {
        console.log( item + ' has unacceptable type' );
      }
    })
  }

  document.body.append(parent);
}