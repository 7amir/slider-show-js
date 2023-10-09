const sliders = document.querySelectorAll('.sliders');

// گرفتن ال آی و و دکمه های قبلی و بعدی 
sliders.forEach(function(slider) {
  const sliderItems = slider.querySelectorAll('.slider li');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let currentIndex = 0;

  /**
   * حذف و اضاف کلاس اکتیو به ایتم های اسلایدر
   * @param {string} index - پیدا کردن ایندکس
  */
  function showSlide(index) {
    sliderItems[currentIndex].classList.remove('active');
    sliderItems[index].classList.add('active');
    currentIndex = index;
  }

  // دکمه قبلی
  prev.addEventListener('click', () => {
    if (currentIndex - 1 < 0) {
      nextIndex = sliderItems.length - 1;
    } else {
      nextIndex = currentIndex - 1;
    }
    showSlide(nextIndex);
  });

  // دکمه بعدی
  next.addEventListener('click', () => {
    if (currentIndex >= sliderItems.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    showSlide(nextIndex);
  });
})
