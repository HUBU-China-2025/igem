document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar-custom');
  window.addEventListener('scroll', function () {
    if (navbar.classList.contains('bg-transparent')) {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.add('shadow');
        navbar.classList.remove('navbar-dark');
      } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.remove('shadow');
        navbar.classList.add('navbar-dark');
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      var menu = this.querySelector('.dropdown-menu');
      menu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
      var menu = this.querySelector('.dropdown-menu');
      menu.classList.remove('show');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  const rootElement = document.documentElement;

  if (!scrollToTopBtn || !rootElement) {
    return
  }

  function handleScroll() {
    // Show button when scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= rootElement.scrollHeight - 50) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleScroll);
});

// 加载动画
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const loading = document.querySelector('#loading')
    loading.style.opacity = '0'
    loading.style.zIndex = '-999'
  }
}


//顶部进度条
document.addEventListener('DOMContentLoaded', function () {
  var winHeight = window.innerHeight,
    docHeight = document.documentElement.scrollHeight,
    progressBar = document.querySelector('#content_progress');
  progressBar.max = docHeight - winHeight;
  progressBar.value = window.scrollY;

  document.addEventListener('scroll', function () {
    progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.value = window.scrollY;
  });
});

// Scroll Top
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const element = document.getElementById('scroll-top')
    if (!element) {
      return
    }
    let ticking = false
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let offset = window.scrollY;
        if (offset > window.innerHeight) {
          element.style.opacity = '1'
          element.style.zIndex = '999'
        } else {
          element.style.opacity = '0'
          element.style.zIndex = '-999'
        }
        ticking = false;
      })
      ticking = true;
    }
  })
})

const setHeaderBox = () => {
  const headerMap = new Map([
    ['attributions', 'https://static.igem.wiki/teams/5044/header-team.png'],
    ['award', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['bigger-picture', 'https://static.igem.wiki/teams/5044/header-human-practices.png'],
    ['human-practices', 'https://static.igem.wiki/teams/5044/header-human-practices.png'],
    ['biopedia', 'https://static.igem.wiki/teams/5044/header-biopedia.png'],
    ['collaboration', 'https://static.igem.wiki/teams/5044/header-human-practices.png'],
    ['contribution', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['description', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['design', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['education', 'https://static.igem.wiki/teams/5044/header-human-practices.png'],
    ['engineering', 'https://static.igem.wiki/teams/5044/header-engineering.jpg'],
    ['entrepreneurship', 'https://static.igem.wiki/teams/5044/header-human-practices.png'],
    ['hardware', 'https://static.igem.wiki/teams/5044/header-dry-lab-1.jpg'],
    ['member', 'https://static.igem.wiki/teams/5044/header-team.png'],
    ['model', 'https://static.igem.wiki/teams/5044/header-dry-lab-1.jpg'],
    ['notebook', 'https://static.igem.wiki/teams/5044/home-02.jpg'],
    ['parts', 'https://static.igem.wiki/teams/5044/home-02.jpg'],
    ['plant', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['protocol', 'https://static.igem.wiki/teams/5044/together01.jpg'],
    ['results', 'https://static.igem.wiki/teams/5044/header-result.jpg'],
    ['safety', 'https://static.igem.wiki/teams/5044/header-project.png'],
    ['society', 'https://static.igem.wiki/teams/5044/home-02.jpg'],
    ['software', 'https://static.igem.wiki/teams/5044/header-dry-lab-1.jpg'],
  ])
  const headerBox = document.querySelector('.header-box')
  if (!headerBox) {
    return
  }
  const headerBg = document.createElement("div")
  const headerImg = document.createElement("div")
  const headerTitle = document.createElement("div")
  const img = document.createElement("img")

  headerBg.classList.add('header-bg')
  headerImg.classList.add('header-img')
  headerTitle.classList.add('header-title')
  img.setAttribute('src', headerMap.get(window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]))
  headerTitle.textContent = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].toUpperCase()
  headerTitle.setAttribute('data-text', window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].toUpperCase())
  headerImg.append(img)
  headerBox.append(headerBg, headerTitle, headerImg)
}

setHeaderBox()
  