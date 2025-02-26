		// const logo = document.querySelector('.logo')
		// const body = document.getElementsByTagName('body')[0]
		// logo.addEventListener('click', ()=>{
		// 	body.classList.toggle('switch-color')
		// })


// WRITING A SCRIPT FOR THE BACK TO TOP BUTTON
		const toTop = document.querySelector('#topIcon')

		 toTop.addEventListener('click', ()=>{
			window.scrollTo({
				 top: 0,
				 behavior: 'smooth',
			}
				)
		})


		window.addEventListener('scroll', ()=>{
			if (window.pageYOffset > 200) {
				toTop.classList.add('active')
			}else{
				toTop.classList.remove('active')
			}
		})
		 

		// WRITING CODE FOR HIDING AND DISPLAYING THE DRAWER ON SMALL SCREEN DEVICE

		const closeMenu = document.querySelector('#menu-close')
		const openMenu = document.querySelector('#menu-icon')
		const navUl = document.getElementsByTagName('ul')[0]
		const navLi = document.getElementsByClassName('li')

		openMenu.addEventListener('click', ()=>{
		navUl.classList.toggle('clicked')
        })

		closeMenu.addEventListener('click', ()=>{
			navUl.classList.toggle('clicked')
		})

		 Array.from(navLi).forEach(list=>{
		 	list.addEventListener('click', ()=>{
		 		navUl.classList.toggle('clicked')
		 	})
		 })

		 // window.addEventListener('click', ()=>{
		 // 	  if (navUl.classList.contains('clicked')) {
		 // 	  	navUl.classList.remove('clicked')
		 // 	  }else{
		 // 	  	navUl.classList.add('clicked')
		 // 	  }
		 // })

// THIS BLOCK OF CODES CHECK THE SCROLL POSITION OF THE NAVBAR AND CHANGES ITS BACKGROUND ACCORDINGLY
	  
		const navbar = document.getElementsByTagName('nav')[0]

		window.addEventListener('scroll', ()=>{
			if (window.pageYOffset >= 100) {
				navbar.classList.add('scrolled')
			}else{
				navbar.classList.remove('scrolled')
			}
		})       

 


//WRITING CODE TO DISPLAY THE ABOUT SECTIION ON SMALL SCREEN DEVICES

 
		 const largeSlide = document.querySelector('.slides')
		 let slides = document.querySelectorAll('.slide')
		 const arrowRight = document.getElementsByClassName('fa-arrow-right')[0]
		 const arrowLeft = document.getElementsByClassName('fa-arrow-left')[0]
		 let index = 1
		 let interval = 4000
		  
		 const firstNode = slides[0].cloneNode(true) 
		 const lastNode = slides[slides.length - 1].cloneNode(true)
         largeSlide.append(firstNode)
         largeSlide.prepend(lastNode)
         firstNode.id = 'first-node'
         lastNode.id = 'last-node'

		 const clientWidth = slides[index].clientWidth
		  largeSlide.style.transform = `translate(${-clientWidth * index}px)`

		  startSlide = () => {
		  	setInterval(()=> {
		  		index++
		  		if (index === slides.length) {
		  			index = 1
		  		}
		  		largeSlide.style.transform = `translate(${-clientWidth * index}px)`
		  		largeSlide.style.transition = '.8s'
		  	}, interval)
		  }

		  largeSlide.addEventListener('transitionend', ()=>{
		  	 slides = document.querySelectorAll('.slide')
		  	if (slides[index].id === firstNode.id) {
		  		largeSlide.style.transition = 'none'
		  		index = 1
		  		largeSlide.style.transform = `translate(${-clientWidth * index}px)`
		  		largeSlide.style.transition = 'none'
		  	}

		  	if (slides[index].id === lastNode.id) {
		  		largeSlide.style.transition = 'none'
		  		index = slides.length - 2
		  		largeSlide.style.transform = `translate(${-clientWidth * index}px)`
		  	}

		  })

		  arrowRight.addEventListener('click',()=>{
		  	slides = document.querySelectorAll('.slide')
		  	if (index >= slides.length -1) return
		  		index++
		  	largeSlide.style.transform = `translate(${-clientWidth * index}px)`
		  	largeSlide.style.transition = '0.8s'

		  })

		  arrowLeft.addEventListener('click',()=>{
		  	slides = document.querySelectorAll('.slide')
		  	if (index <= 0) return
		  		index--
		  	largeSlide.style.transform = `translate(${-clientWidth * index}px)`
		  	largeSlide.style.transition = '0.8s'

		  })		  

		  startSlide()		
