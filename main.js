var $car = document.querySelector('.car-image');
$car.style.top = '0';
$car.style.left = '0';
var x = 0;
var y = 0;
var translate = '';

var carData = [
  {
    direction: 'east',
    location: {
      x: 0,
      y: 0
    }
  }
];

function moveCar() {
  translate = 'translate(' + x + 'px, ' + y + 'px)';
  x = x + 7;
  $car.style.transform = translate;
}

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    $car.style.transform = 'rotate(0deg)';
    carData[0].direction = 'east';
  } else if (event.key === 'ArrowLeft') {
    $car.style.transform = 'rotate(-180deg)';
    carData[0].direction = 'west';
  } else if (event.key === 'ArrowUp') {
    $car.style.transform = 'rotate(-90deg)';
    carData[0].direction = 'north';
  } else if (event.key === 'ArrowDown') {
    $car.style.transform = 'rotate(90deg)';
    carData[0].direction = 'south';
  } else if (event.key === ' ') {
    setInterval(moveCar, 16);
  }
});
