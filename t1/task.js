const reveal = document.querySelectorAll('.reveal')
  
window.addEventListener('scroll', function isVisible() {
    Array.from(reveal).forEach(revealValue => {
    const { top, bottom } = revealValue.getBoundingClientRect();
    if (bottom < 0) {
        return revealValue.classList.remove('reveal_active')
    };
    if (top < 0) {
        return revealValue.classList.remove('reveal_active')
    }
    return revealValue.classList.add('reveal_active');})})