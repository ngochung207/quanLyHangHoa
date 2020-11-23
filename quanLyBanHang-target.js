function readClick() {
    const i = document.querySelector('#myList');
    i.addEventListener('click',function(event){
        console.log(event.target)
    });
}


