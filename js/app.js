const closeBtns = document.querySelectorAll('.close-btn')
const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar')
const closeBg = document.querySelector('.close-bg')
bars.addEventListener('click', () => {
	sidebar.classList.add('show')
	closeBg.classList.add('active')
})
closeBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		sidebar.classList.remove('show')
		closeBg.classList.remove('active')
	})
})