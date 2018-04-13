var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');
var itemArray = [
    {
        img: 'https://unsplash.it/256/256?image=100',
        alt: 'Working?',
        title: 'Unsplash Photo',
        cost: 75,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi fugiat repellat?'
    },
    {
        img: 'https://unsplash.it/256/256?image=206',
        alt: 'image 205',
        title: 'Unsplash Photo',
        cost: 100,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi fugiat repellat?'
    },
    {
    img: 'https://unsplash.it/256/256?image=206',
        alt: 'image 205',
        title: 'Unsplash Photo',
        cost: 125,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi fugiat repellat?'
    },
    {
    img: 'https://unsplash.it/256/256?image=206',
        alt: 'image 205',
        title: 'Unsplash Photo',
        cost: 150,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi fugiat repellat?'
    }
];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].alt);

        var item = `
        <li data-sku='${1}'>
            <input type='checkbox'>
            <img src="${arr[i].img}" alt='${arr[i].alt}'>
            <h3>${arr[i].title}</h3>
            <p>${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
    
}
displayItems(itemArray);

function addListener(arr){
    for(var i = 0; i< arr.length; i++){
        console.log(arr[i]);
        arr[i].addEventListener('click', function(event) {
            this.classList.toggle('selected');
            //this.firstElementChild.checked == true;
            // TERNARY OPERATOR - SUPER AWESOME IF STATEMENT
            (this.firstElementChild.checked == true) ?
                this.firstElementChild.checked == false : 
                this.firstElementChild.checked == true;

                selectedArray.push(arr[this.dataset.sku]);
                console.log(selectedArray);
        });
    }
}
addListener(items.children);
