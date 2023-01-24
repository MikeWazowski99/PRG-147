function showImg(){
    var image = document.getElementById('Gato')
    image.style.display='block'
    image.style.marginLeft='auto'
    image.style.marginRight='auto'
}

function hideImg(){
    document.getElementById('Gato').style.display='none'
}

function changeWidth(){
    var image = document.getElementById('Gato');
    image.style.width = '256px'
    image.style.height = 'auto'
}

function changeColor(){
    var text = document.getElementById('text');
    text.style.color = 'green'
}

function myFunction2(){
    document.getElementById('text').innerHTML = "Changed from the function in the scripts folder"
}