const element = document.querySelectorAll('.rotator__case');
const elementArray = Array.from(element);
elementArray.forEach( elementValue => {
    elementValue.style.color = elementValue.dataset.color
})
function classToggle () {
    elementArray[0].classList.remove('rotator__case_active')
   let elem = elementArray.shift()
   elementArray.push(elem)
   elementArray[0].classList.add('rotator__case_active')
}

setInterval (classToggle, 1000)