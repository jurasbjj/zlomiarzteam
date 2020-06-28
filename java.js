    // news
    const content = document.querySelectorAll('.news .content')
    const img = document.querySelectorAll('.news img');
    const arrow = document.querySelectorAll('.news .fas')
    activeElement = 0;

    function nextNews(){
        content[activeElement].classList.remove('active')
        img[activeElement].classList.remove('active')
        activeElement++
        if(activeElement == content.length){
            activeElement = 0
        }
        content[activeElement].classList.add('active')
        img[activeElement].classList.add('active')
    }
    function previousNews(){
        content[activeElement].classList.remove('active')
        img[activeElement].classList.remove('active')
        activeElement--
        if(activeElement == -1){
            activeElement = content.length - 1
        }
        content[activeElement].classList.add('active')
        img[activeElement].classList.add('active')
    }

    arrow[0].addEventListener('click', previousNews)
    arrow[1].addEventListener('click', nextNews)

    setInterval(nextNews, 10000)
    //koniec news


    //coach
    const coach = document.querySelectorAll('.coach img')
    const coachText = ['Daniel Wrześniewski', 'Adam Górny', 'Andrzej Iwat']
    const coachH3  = document.querySelector('.coach h3')
    const coachP = document.querySelectorAll('.coach p')



    coach[0].addEventListener('mouseover', function(){
        coachH3.textContent = (coachText[0])
    })
    coach[1].addEventListener('mouseover', function(){
        coachH3.textContent = (coachText[1])
    })
    coach[2].addEventListener('mouseover', function(){
        coachH3.textContent = (coachText[2])
    })

    

    coach[0].addEventListener('click', function(){
        coachP.forEach(function(coachP){
            coachP.classList.remove('active')
        })
        coach.forEach(function(coach){
            coach.classList.remove('active')
        })
        coachP[0].classList.add('active');
        coach[0].classList.add('active');

    })
    coach[1].addEventListener('click', function(){
        coachP.forEach(function(coachP){
            coachP.classList.remove('active')
        })
        coach.forEach(function(coach){
            coach.classList.remove('active')
        })
        coachP[1].classList.add('active');
        coach[1].classList.add('active');

    })
    coach[2].addEventListener('click', function(){
        coachP.forEach(function(coachP){
            coachP.classList.remove('active')
        })
        coach.forEach(function(coach){
            coach.classList.remove('active')
        })
        coachP[2].classList.add('active');
        coach[2].classList.add('active');
    })
    // koniec coach


    //insta
    let left = 0

    $('.fa-chevron-right').on('click', function(){
        $('.wrap').animate({
            'left': '-20%'
        },500)
    })
    $('.fa-chevron-left').on('click', function(){
        $('.wrap').animate({
            'left':  '0%'
        },500)

    })
    // koniec insta

    //scroll
    $('li').on('click', function(){
        $('body, html').animate({
            'scrollTop': $('.' + this.id).offset().top - $('nav').height() 
        }, 500)
    })
    $('.logo img, .logo h3').on('click', function(){
        $('body, html').animate({
            'scrollTop': $('.logo1').offset().top
        }, 500)
    })
    // koniec scroll