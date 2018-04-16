// Ref : https://ray7-175908.firebaseapp.com
const loadImage = target => {
   target.style.backgroundImage = `url("${target.getAttribute('data-src')}")`
   target.style.opacity         = 100
   return target
}
const onIntersection = entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio >0 ) {
            obServ.unobserve(entry.target)
            loadImage(entry.target)
        }
    })
}
const conf   = {
    rootMargin: '50px 0px',
    threshold: 0.01
}
const obServ = new IntersectionObserver(onIntersection, conf)
const Lazy = () => {
const images = document.querySelectorAll('.card-img')
    images.forEach( image =>{
        obServ.observe(image)
    })
}


export default Lazy;
