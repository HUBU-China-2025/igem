const swiper = new Swiper('.swiper', {
  direction: 'vertical', // 垂直切换选项
  loop: false, // 循环模式选项
  mousewheel: true,
  height: window.innerHeight,
  speed: 700,
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
})

const startJourney = () => {
  swiper.slideTo(1)
}

const onElementInView = (element, callback, useIntersectionObserver = true) => {
  if (useIntersectionObserver && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target, true)
        } else {
          callback(entry.target, false)
        }
      })
    })

    observer.observe(element)

    return () => observer.unobserve(element)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let wheel = [0, 1, 2]
  let rotate = 1
  const leftDivList = document.querySelectorAll('.advantages-left-round-text')
  const rightDivList = document.querySelectorAll('.advantages-right-item')
  const centerDiv = document.querySelector('.advantages-left-center-text')
  leftDivList.forEach((div, index) => {
    div.onclick = () => {
      if (div.classList.contains('.advantages-left-round-text-active')) {
        return
      }
      const parentBox = document.querySelector('.advantages-left')
      if (!parentBox) {
        return
      }
      if (index === wheel[0]) {
        return
      }
      if (index === wheel[1]) {
        rotate += 240
        wheel[0] = (wheel[0] + 1) % 3
        wheel[1] = (wheel[1] + 1) % 3
        wheel[2] = (wheel[2] + 1) % 3
      }
      if (index === wheel[2]) {
        rotate += 120
        wheel[0] = (wheel[0] + 2) % 3
        wheel[1] = (wheel[1] + 2) % 3
        wheel[2] = (wheel[2] + 2) % 3
      }
      parentBox.style.transform = `rotate(${90 + rotate}deg)`
      centerDiv.style.transform = `translate(-50%, -50%) rotate(${-(90 + rotate)}deg)`
      leftDivList.forEach((item, index) => {
        item.classList.remove('advantages-left-round-text-active')
        switch (index) {
          case 0:
            item.style.transform = `translate(-50%, -50%) rotate(${-(90 + rotate)}deg)`
            break
          case 1:
            item.style.transform = `translate(50%, 0) rotate(${-(90 + rotate)}deg)`
            break
          case 2:
            item.style.transform = `translate(-50%, 0) rotate(${-(90 + rotate)}deg)`
            break
        }
      })
      div.classList.add('advantages-left-round-text-active')

      rightDivList.forEach((item, i) => {
        if (i !== index) {
          document.querySelector('.advantages-right').style.opacity = '0'
          setTimeout(() => {
            item.classList.remove('advantages-right-show')
          }, 700)
        }
      })
      setTimeout(() => {
        document.querySelector('.advantages-right').style.opacity = '1'
        rightDivList[index].classList.add('advantages-right-show')
      }, 700)
    }
  })
})