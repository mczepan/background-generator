var css = document.querySelector('h3');
var button = document.querySelector('button');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
css.textContent = body.style.background + ';';

const changeBackgroundHalf = () => {
	body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
	css.textContent = body.style.background + ';';
};

const generateRandomColors = () => {
	var c1 =
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	var c2 =
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	console.log(c1);
	body.style.background = `linear-gradient(to right, ${c1},${c2})`;
	css.textContent = body.style.background + ';';
};

button.addEventListener('click', generateRandomColors);

color1.addEventListener('input', changeBackgroundHalf);
color2.addEventListener('input', changeBackgroundHalf);

// const first = () => {
// 	const greet = "Hi";
// 	const second = () => {
// 		alert(greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();

// const compose = (f,g) => (a) => f(g(a));
// const composeInner = compose((g) => g, (a) => `Hi ${a}`);
// composeInner('Rob');

// const curriedMultiply = (a) => (b) => a *b;
// const multiplyBy5 = curriedMultiply(5);

// const array = [1,3,5,7];
// const newArray = a.map(e => e * 3);

// const filterArray = a.map(e => e !== 3);

// const array = [
// {
// 	username: "john",
// 	team: "red",
// 	score: 5,
// 	items: ["ball", "book", "pen"]
// },
// {
// 	username: "becky",
// 	team: "blue",
// 	score: 10,
// 	items: ["tape", "backpack", "pen"]
// },
// {
// 	username: "susy",
// 	team: "red",
// 	score: 55,
// 	items: ["ball", "eraser", "pen"]
// },
// {
// 	username: "tyson",
// 	team: "green",
// 	score: 1,
// 	items: ["book", "pen"]
// },

// ];

// //Create an array using forEach that has all the usernames with a "!" to each of the usernames

// let newArray = [];

// array.forEach(e => {
// 	newArray.push({...e,username:`!${e.username}`})
// })

// //Create an array using map that has all the usernames with a "? to each of the usernames
// const newArrayMap = array.map(e =>
// 	({...e, username: `?${e.username}`})
// 	)

// //Filter the array to only include users who are on team: red

// const filteredArray = array.filter(e => e.team === 'red');

// //Find out the total score of all users using reduce

// const result = array.reduce((sum,e) => sum + e.score, 0);

// const nestedArray = array.map(e => ({...e, items: e.items.map(nestedE => `${nestedE}!`)}))
// //[...e, items: e.items.map(nestedE => `${nestedE}!`)]
