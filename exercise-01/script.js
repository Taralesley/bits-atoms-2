
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

const container = document.getElementById('test');
const images = container.querySelectorAll('img')

var res = 1.99;

//slider function
slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
    var color = 'linear-gradient(90deg, rgb(20,50,90) ' + slider.value + '%, rgb(214,214,214) ' + slider.value + '%)';
    slider.style.background = color;

    images.forEach(function(image){
        image.height = slider.value * res;
    });
});

// button color changer
function color (z) {
    var a = getComputedStyle(z).background;

    document.getElementsByTagName("BODY")[0].style.background= a;
    document.getElementsByClassName('card')[0].style.background = a;
}


// spinbutton - code inspired by a yt tutorial 
const btn = document.getElementById('button');

let index = 0;

const colors = ['#515ada', '#d53369', 'rgb(63,94,251,1)', '#3ad59f'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
