const navList = document.querySelector('.nav-list-burger');

document.querySelector('.burger-icon').addEventListener('click', () => {
  navList.style.display = 'block';
  navList.style.transform = 'translateX(0%)';
});

document.querySelector('.close-icon').addEventListener('click', () => {
  navList.style.transform = 'translateX(120%)';
});
