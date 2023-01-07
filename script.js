window.onload = function () {
  const images = [...document.querySelectorAll('.image')];

  const popup = document.querySelector('.pop-up');
  const closeBtn = document.querySelector('.close-btn');
  const image = document.querySelector('.image');
  const imageName = document.querySelector('.image-name');
  const largeImage = document.querySelector('.large-image');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  let index = 0;
  console.log(leftArrow)
  
  const updateImage = ({src, alt}) => {
    let path = src
    largeImage.src = path;
    imageName.innerHTML = alt
  }

  images.forEach((item, i) => {
    item.removeEventListener('click', null)
    item.addEventListener('click', function () {
      index = i
      updateImage(item);
      popup.classList.remove('inactive');
      popup.classList.add('active');
    })
  })
  
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    popup.classList.add('inactive');
  })

  
  leftArrow.onclick = function () {
    if (index > 0) {
      index--
      const item = images[index]
      updateImage(item)
    }
  }

  
  rightArrow.onclick = function () {
    if (index < images.length) {
      index++
      const item = images[index]
      updateImage(item)
    }
  }
  
} 