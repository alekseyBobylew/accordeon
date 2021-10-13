let accordions
const accordionWrapper = document.querySelector('.accordion-wrapper')

const contentData = [
	{
		id: 1,
		title: "Title1",
		content: 'Content1'
	},
	{
		id: 2,
		title: "Title2",
		content: 'Content2'
	},
	{
		id: 3,
		title: "Title3",
		content: 'Content3'
	},
	{
		id: 4,
		title: "Title4",
		content: 'Content4'
	},
	{
		id: 5,
		title: "Title5",
		content: 'Content5'
	},
	{
		id: 6,
		title: "Title6",
		content: 'Content6'
	}
];

const createTemplate = item => {
	return `
	        <div class="accordion-item">
	            <div class="accordion-item-title">${item.title}</div>
	            <div class="accordion-item-content">${item.content}</div>
	        </div>
	    `
};

const fillHtmlList = () => {
	contentData.forEach(item => {
		accordionWrapper.innerHTML += createTemplate(item);
	});
	accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList()

if (accordions) {
	for (item of accordions) {
		item.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
			} else {
				for (el of accordions) {
					el.classList.remove('active');
				}
				this.classList.add('active');
			}
		})
	}
}


























// var accardeons = document.querySelectorAll('.accardeon'),
//     btns = document.querySelectorAll('.btn');

// for(btn of btns) {
//     btn.addEventListener('click', function() {
//         if (event.target.parentNode.parentNode.classList.contains('active') == true )  {
//             event.target.parentNode.parentNode.classList.remove('active');
//         } else {
//             for(let i = 0; i < accardeons.length; i++) {
//                 accardeons[i].classList.remove('active');
//             }
//             event.target.parentNode.parentNode.classList.add('active');
//         }
//     });
// }