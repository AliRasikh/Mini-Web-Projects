const next = document.getElementById('next');
const prev = document.getElementById('prev');
const image = document.getElementById('image');

count = 2;
maxCount = 3; 

next.addEventListener('click', () => {
    image.src = `images/car${count}.jpg`;
    count === maxCount? count = 1 : count++;
    console.log(count);
    console.log(image);
});
  
prev.addEventListener('click', () => {
    image.src = `images/car${count}.jpg`;
    count === 1? count = maxCount : count--;
    console.log(count);
    console.log(image);
});