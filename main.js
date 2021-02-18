var $car = document.querySelector('.car-image');

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    $car.style.transform = 'rotate(0deg)';
  } else if (event.key === 'ArrowLeft') {
    $car.style.transform = 'rotate(-180deg)';
  } else if (event.key === 'ArrowUp') {
    $car.style.transform = 'rotate(-90deg)';
  } else if (event.key === 'ArrowDown') {
    $car.style.transform = 'rotate(90deg)';
  }
});
