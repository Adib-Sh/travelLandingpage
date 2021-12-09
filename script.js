const toggleBtn = document.querySelector('.toggle')
const showCase = document.querySelector('.showcase')

let close =  true;
toggleBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (close){
        toggleBtn.classList.add('active');
        showCase.classList.add('active');
        close = false;;
    } else{
        toggleBtn.classList.remove('active');
        showCase.classList.remove('active');
        close = true;
    }
}