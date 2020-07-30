const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");

const booksTemplates = Handlebars.compile(bookTemplateElem.innerHTML);

const users = [{
    firstName : "Teko" ,
    bookCount : 8,
    dayCount : 5,
},
{
    firstName : "Zizou",
    bookCount : 3,
    dayCount : 5,

},
{
    firstName : "Ashley",
    bookCount :9,
    dayCount : 6,
},
]

    message1.innerHTML = booksTemplates ({
        users
    });