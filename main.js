const gallery = document.querySelector(".galleryContainer");

function insert(){
let imgurl = document.querySelector(".inputfield").value;
const imgelement = document.createElement('img');
imgelement.classList.add('imagebox')
imgelement.setAttribute('src',imgurl);
gallery.appendChild(imgelement);

}