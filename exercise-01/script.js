
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

const container = document.getElementById('test');
const images = container.querySelectorAll('img')

var res = 1.99;

// var sizeChange1 = document.getElementById('sizechange1');
// var sizeChange2 = document.getElementById('sizechange2');

// sizeChange1.height = slider.value * res;
// sizeChange2.height = slider.value * res;

const secret = document.getElementById('secret');


slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
    var color = 'linear-gradient(90deg, rgb(20,50,90) ' + slider.value + '%, rgb(214,214,214) ' + slider.value + '%)';
    slider.style.background = color;

    // sizeChange1.height = slider.value * res;
    // sizeChange2.height = slider.value * res;

    images.forEach(function(image){
        image.height = slider.value * res;
    });


    if(slider.value <= 0){
        secret.style.opacity = 1;
    }
    else{
        secret.style.opacity = 0;
    }
});

function color (z) {
    var a = getComputedStyle(z).background;

    document.getElementsByTagName("BODY")[0].style.background= a;
    document.getElementsByClassName('card')[0].style.background = a;
    // document.getElementsByClassName('title')[0].style.color = 'black';
}



const btn = document.getElementById('button');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
