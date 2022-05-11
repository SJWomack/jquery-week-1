$(document).ready(onReady)

function onReady(){
    console.log('heloooo');
  
    let titleHeader =  $('h1');  // <--- selector
    console.log(titleHeader)
    let allListItems = $('li');

    console.log(allListItems);

    let thatOneListItem= $('#madame-li-element');
    thatOneListItem.text('DOM Manipulation');
    

    $('.first-and-last').css('color','blue');
    

}