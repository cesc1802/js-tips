
//good
['cat', 'dog', 'turtle'].includes(animal);

//good
['cat', 'dog', 'turtle'].indexOf(animal) !== -1;


//good
const printAnimalDetails = ({type, name, gender} = {}) => {
	if(!type) return 'No animal type';
	if(!name) return 'No animal nam';
	if(!gender) return 'No animal gender'

	return `${}`
}

//good
function printFruits(color) {
	const fruitColor = {
		red: ['apple', 'strawberry'],
		yellow: ['banana', 'pineapple'],
		purple: ['grape', 'plum']
	};

	return fruitColor[color] || [];
}

function printVegetableName({name} = {}) {
	console.log(name || 'unknown')
} 