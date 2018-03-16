const Lazy = () => {
        [].forEach.call(
                document.querySelectorAll('.card-img[data-src]'), function(img){
                    img.style.backgroundImage = `url("${img.getAttribute('data-src')}")`;
                    img.style.opacity = 100; 
                });
}
export default Lazy;
