const reveal = document.querySelectorAll('.reveal')
  
window.addEventListener('scroll', function isVisible() {
    Array.from(reveal).forEach(revealValue => {
    const { top, bottom } = revealValue.getBoundingClientRect();
    if (top > 0 && bottom < window.innerHeight) {
        revealValue.classList.add('reveal_active')
    } else {
        revealValue.classList.remove('reveal_active');}})})
    
