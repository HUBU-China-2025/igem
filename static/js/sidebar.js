/**
 *
 * @param navbarHeight 导航栏高度
 * @param offsetTop 顶部偏移量
 * @param page 页面
 */
const initAnchors = (navbarHeight, offsetTop, page) => {
  document.addEventListener('DOMContentLoaded', () => {
    const anchorsList = document.getElementById('anchors-list')
    const headers = document.querySelectorAll('h2, h3')

    headers.forEach((header, index) => {
      const li = document.createElement('li')

      const img = document.createElement('img')
      img.src = 'https://static.igem.wiki/teams/5044/anchors-icon.png'
      const span = document.createElement('span')
      span.textContent = header.textContent
      if (page === 'notebook') {
        span.textContent = header.textContent.split(':')[0]
      }

      if (header.tagName === 'H3') {
        li.classList.add('ms-4', 'li-h3')
        li.append(span)
      } else {
        li.classList.add('li-h2')
        li.append(img, span)
      }

      if (index === 0) {
        li.classList.add('active')
      }

      // 点击事件绑定
      li.addEventListener('click', function () {
        const offset = navbarHeight; // 导航栏高度
        const elementPosition = header.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition, behavior: 'smooth'
        });
      });

      anchorsList.appendChild(li);
    });
  });
  let timer = null
  const handlerScroll = () => {
    clearTimeout(timer)
    const scrollTop = document.documentElement.scrollTop
    const titleList = document.querySelectorAll('h2, h3')
    const anchorsList = document.getElementById('anchors-list').querySelectorAll('li');
    const li = anchorsList[0]
    timer = setTimeout(() => {
      if (scrollTop < offsetTop) {
        anchorsList.forEach((li) => {
          li.classList.remove('active')
        })
        li.classList.add('active')
      } else {
        titleList.forEach((item, index) => {
          const rect = item.getBoundingClientRect()
          if (rect.top < 120) {
            anchorsList.forEach((li) => {
              li.classList.remove('active')
            })
            anchorsList[index].classList.add('active')
          }
        })
      }
    }, 30)
    if (scrollTop > offsetTop) {
      document.getElementById('anchors').style.top = `${scrollTop + 33 - offsetTop}px`
    }
  }

  window.addEventListener('load', handlerScroll)
  window.addEventListener('scroll', handlerScroll)
}

const initEntry = () => {
  const entry = document.getElementById('entry')
  if (entry.childNodes.length === 0) {
    document.getElementById('entry-wrapper').remove()
  }
}