var img = document.getElementById("accounty");

function scale(){
    img.style = 'img:hover{height: 128px; width: 128px; transition: 0.8s;}'
}
img.onmouseover = scale();