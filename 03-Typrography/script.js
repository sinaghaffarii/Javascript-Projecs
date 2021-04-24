const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 250 //  250px

hero.addEventListener('mousemove', function (event) {
  const { offsetWidth: width, offsetHeight: height } = hero
  let { offsetX: x, offsetY: y } = event

  x += event.target.offsetLeft
  y += event.target.offsetTop

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(231, 76, 60,1.0),
  ${xWalk}px ${yWalk * -1}px 0 rgba(39, 174, 96,1.0),
  ${yWalk * -1}px ${xWalk}px 0 rgba(155, 89, 182,1.0),
  ${yWalk}px ${xWalk * -1}px 0 rgba(241, 196, 15,1.0)
  
  `
})
