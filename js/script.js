document.getElementById('dodaj').onclick = function() {
    let liElement = document.createElement('li');
    let length = document.querySelectorAll('#items li').length + 1;
    let txtNode = document.createTextNode(`Item ${length}`);
    let attrNode = document.createAttribute('class');
    attrNode.value = 'item';
    let list = document.getElementById('items');
    list.appendChild(liElement);
    liElement.appendChild(txtNode);
    liElement.setAttributeNode(attrNode);
}