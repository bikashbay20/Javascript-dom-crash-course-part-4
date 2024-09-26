var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form SubmitEvent //
form.addEventListener('submit', addItem);

// delete event //
itemList.addEventListener('click', removeItem);

// filter Event //
filter.addEventListener('keyup', filterItem);

// Add item //
function addItem(e) {
    e.preventDefault();

    // console.log(1);
    // get input value //
    var newItem = document.getElementById('item').value;

    // create new li Element //
    var li = document.createElement('li');
    // add class //
    li.className = 'list-group-item';

    // Add text node with input value //
    li.appendChild(document.createTextNode(newItem));
    // itemList.appendChild(li);

    // create a del Element //
    var deleteBtn = document.createElement('button');

    // Add classes to the del button //
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append node //
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button to li //
    li.appendChild(deleteBtn);

    // Append li to list //
    itemList.appendChild(li);
}

// Remove item //
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

// filter item //
function filterItem(e) {
    //  covert Text to lowercase //
    var text = e.target.value.toLowerCase();
    //  Get lis //
    var items = itemList.getElementsByTagName('li');
    //  convert tp Array //
    Array.from(items).forEach(function (item) {
        var itemName = item.firstchildren.textContent;
       if(itemName.toLowerCase().indexOf(text)!= -1){
        item.style.display = 'block';
       }else{
        item.style.display ='none';
       }
    });
}