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
  if (carData.direction === 'east') {
    translate = 'translate(' + carData.location.x + 'px, ' + carData.location.y + 'px)';
    carData.location.x += 7;
    $car.style.transform = translate;
  } else if (carData.direction === 'west') {
    translate = 'translate(' + carData.location.x + 'px, ' + carData.location.y + 'px)';
    carData.location.x -= 7;
    $car.style.transform = translate;
  } else if (carData.direction === 'north') {
    translate = 'translate(' + carData.location.x + 'px, ' + carData.location.y + 'px)';
    carData.location.y += 7;
    $car.style.transform = translate;
  } else if (carData.direction === 'south') {
    translate = 'translate(' + carData.location.x + 'px, ' + carData.location.y + 'px)';
    carData.location.y -= 7;
    $car.style.transform = translate;
  }

}

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    carData.direction = 'east';
    $car.style.transform = 'rotate(0deg)';
  } else if (event.key === 'ArrowLeft') {
    carData.direction = 'west';
    $car.style.transform = 'rotate(-180deg)';
  } else if (event.key === 'ArrowUp') {
    carData.direction = 'north';
    $car.style.transform = 'rotate(-90deg)';
  } else if (event.key === 'ArrowDown') {
    carData.direction = 'south';
    $car.style.transform = 'rotate(90deg)';
  } else if (event.key === ' ') {
    if (spaceCounter % 2 === 0) {
      interval = setInterval(moveCar, 16);
    } else {
      clearInterval(interval);
    }
    spaceCounter++;
  }
});
