;
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

function ibg() {
  let ibg = document.querySelectorAll('._ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
;
;
new Swiper('.swiper-slider__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  parallax: true,
});
;
document.querySelector('.icon-menu').addEventListener('click', () => {
	document.querySelector('.icon-menu').classList.toggle('_active');
	document.querySelector('.header__menu').classList.toggle('_active');
	document.querySelector('body').classList.toggle('_lock');
});

//=======================================================================================================================================================>

window.onload = function () {
	//=======================================================================================================================================================>
	/* ANIMATION */
	// Burgers
	document.querySelector('.order__img').classList.add('_anim');
	// Feauters
	const feauterItems = document.querySelectorAll('.grid-passion__img');
	window.addEventListener('scroll', () => {
		feauterItems.forEach((item) => {
			let posItemTop = item.getBoundingClientRect().top;
			if (document.documentElement.clientWidth <= 767.98 && isMobile.any()) {
				if (posItemTop <= document.documentElement.clientHeight / 2) {
					item.classList.add('_anim');
				} else {
					item.classList.remove('_anim');
				}
			} else {
				if (posItemTop <= 250) {
					item.classList.add('_anim');
				} else {
					item.classList.remove('_anim');
				}
			}
		});
	});
	// About & App
	const womanImg = document.querySelector('.about__img');
	const appImg = document.querySelector('.app__img');
	window.addEventListener('scroll', () => {
		let womanImgPosY = womanImg.getBoundingClientRect().top;
		let appImgPosY = appImg.getBoundingClientRect().top;
		// About-Cor
		if (document.documentElement.clientWidth <= 767.98 && isMobile.any()) {
			if (womanImgPosY <= document.documentElement.clientHeight / 2) {
				womanImg.classList.add('_anim');
			} else {
				womanImg.classList.remove('_anim');
			}
		} else {
			if (womanImgPosY <= 180) {
				womanImg.classList.add('_anim');
			} else {
				womanImg.classList.remove('_anim');
			}
		}
		// App Cour
		if (document.documentElement.clientWidth <= 767.98 && isMobile.any()) {
			if (appImgPosY <= document.documentElement.clientHeight / 2) {
				appImg.classList.add('_anim');
			} else {
				appImg.classList.remove('_anim');
			}
		} else {
			if (appImgPosY <= 180) {
				appImg.classList.add('_anim');
			} else {
				appImg.classList.remove('_anim');
			}
		}
	});
	/* ANIMATION */
	//=======================================================================================================================================================>
	/* MENU */
	function innerRating() {
		const foodItem = document.querySelectorAll('.grid-menus__rating');
		let stringRating;
		for (let j = 0; j < foodItem.length; j++) {
			stringRating = '<span>';
			for (let i = 0; i < foodItem[j].dataset.rating; i++) {
				stringRating += '★';
			}
			stringRating += '</span>';
			foodItem[j].innerHTML += stringRating;
			let innerRating = foodItem[j].querySelector('span');
			innerRating.style.width = `${foodItem[j].dataset.rating * 20}%`;
		}
	}

	innerRating();

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('menus__btn')) getFood(e.target);
	});

	// Json
	async function getFood(button) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			let response = await fetch('json/menu.json', {
				method: 'GET',
			});
			if (response.ok) {
				let result = await response.json();
				loadProducts(result);
				button.classList.remove('_hold');
				button.remove();
			} else alert('Error');
		}
	}

	function loadProducts(data) {
		const menuList = document.querySelector('.grid-menus');
		data.menu.forEach((item) => {
			const foodImage = item.image;
			const foodName = item.name;
			const foodCost = item.cost;
			const foodRating = item.rating;

			let template = `
      <div class="grid-menus__item">
\t\t\t\t\t\t<div class="grid-menus__img"><img src="img/menu/${foodImage}" alt="food"></div>
\t\t\t\t\t\t<div class="grid-menus__body">
\t\t\t\t\t\t\t<div class="grid-menus__title">
\t\t\t\t\t\t\t\t<h4 class="grid-menus__name">${foodName}</h4>
\t\t\t\t\t\t\t\t<h4 class="grid-menus__cost">${foodCost}</h4>
\t\t\t\t\t\t\t</div> 
\t\t\t\t\t\t\t<div class="grid-menus__text">There are many things are needed to start the Fast Food Business.</div>
\t\t\t\t\t\t\t<div class="grid-menus__func">
\t\t\t\t\t\t\t\t<button class="grid-menus__btn"></button>
\t\t\t\t\t\t\t\t<div class="grid-menus__rating" data-rating="${foodRating}">★★★★★</div>
\t\t\t\t\t\t\t</div> 
\t\t\t\t\t\t</div>
\t\t\t\t\t</div> 
      `;
			menuList.insertAdjacentHTML('beforeend', template);
		});
		innerRating();
	}

	/* MENU */
	//=======================================================================================================================================================>
	/*Spoler*/
	const spolerButton = document.querySelectorAll('.grid-footer__title');
	if (spolerButton) {
		const spolerBody = document.querySelectorAll('.grid-footer__list')
		for (let i = 0; i < spolerButton.length; i++) {
			let bodyHeight = `${spolerBody[i].clientHeight}px`;
			spolerBody[i].style.height = 0;
			spolerButton[i].addEventListener('click', () => {
				spolerButton[i].classList.toggle('_active');
				spolerBody[i].classList.toggle('_active');
				if (spolerBody[i].classList.contains('_active')) spolerBody[i].style.height = bodyHeight;
				else spolerBody[i].style.height = 0;
			})
		}
	}
	/*Spoler*/
};
;
