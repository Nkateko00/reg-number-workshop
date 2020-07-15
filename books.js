const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");

console.log(bookTemplateElem.innerHTML);

const booksTemplate = Handlebars.compile(bookTemplateElem.innerHTML);

const users = [
	{
		firstName: "Kagiso",
		bookCount: 7,
		dayCount: 5
	},
	{
		firstName: "Meycayle",
		bookCount: 17,
		dayCount: 2
	},
	{
		firstName: "Andy",
		bookCount: 6,
		dayCount: 5
	},
]


message1.innerHTML = booksTemplate({
	users
});

// message2.innerHTML = booksTemplate({
// 	firstName: "Meycayle",
// 	bookCount: 17,
// 	dayCount: 2
// });