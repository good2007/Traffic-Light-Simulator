const lights = [
    document.querySelector('.light.red'),
    document.querySelector('.light.yellow'),
    document.querySelector('.light.green')
];
const colors = ['red', 'yellow', 'green'];
let currentIndex = 0;
function changeLight() {
    lights.forEach(light => light.style.background = 'grey');
    lights[currentIndex].style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}
if (currentIndex === lights.length) 
    {currentIndex = 0;}
    setInterval(changeLight, 2000);