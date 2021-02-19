var $car = document.querySelector('.car-image');
$car.style.top = '0';
$car.style.left = '0';
var translate = '';
var spaceCounter = 0;
var interval = null;

var carData = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
};

function moveCar() {
  translate = 'translate(' + carData.location.x + 'px, ' + carData.location.y + 'px)';
  carData.location.x += 7;
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
    if (spaceCounter % 2 === 0) {
      interval = setInterval(moveCar, 16);
    } else {
      clearInterval(interval);
    }
    spaceCounter++;
  }
});
