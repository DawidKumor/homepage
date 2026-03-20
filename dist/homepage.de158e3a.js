console.log("Hello from main.js");
const firstName = "Dawid";
const age = 32;
console.log(`Name: ${name}, Age: ${age}`);
const header = document.querySelector(`h1`);
console.log(header);
header.innerHTML = "Jeba\u0107 pis i konederacje";
console.log(header.style);
header.style.color = "pink";
header.style.fontSize = "3rem";
header.style.textTransform = "uppercase";
header.style.textAlign = "center";
header.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
const header2 = document.querySelector(`.page-header__subheading--js`);
if (header2) {
    header2.style.color = "blue";
    header2.style.fontSize = "2rem";
    header2.style.textAlign = "center";
    header2.style.textShadow = "1px 1px 3px rgba(0, 0, 0, 0.3)";
    header2.innerHTML = "In\u017Cynier automatyki i robotyki z akademii ta\u0144ca i chumoru";
}
const deathStar = {
    diameter: 120000,
    fire: (target)=>{
        console.log(`${target} destroyed!`);
    },
    isOperating: true,
    levels: 357,
    name: "Death Star",
    population: 1000000,
    commander: {
        name: "Darth Vader",
        rank: "Sith Lord"
    }
};
console.log(deathStar.name);
deathStar.fire("Alderaan");
const fName = "Edward";
const lName = "Norton";
const fullName = `${fName} ${lName}`;
console.log(`Hello, this is ${fullName} in the ship!`);
const greet = (name1, age)=>{
    return `Hello, my name is ${name1} and I am ${age} years old.`;
};
console.log(greet("Dawid", 32));
const button = document.querySelector('.page-header__button--js');
if (button) {
    button.classList.add('testowa-klasa');
    console.log(button.classList);
    const clickFunction = (e)=>{
        const header = document.querySelector('.page-header__heading--js');
        header.innerHTML = "click click clack symphony";
    };
    button.addEventListener('click', clickFunction);
}
const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', ()=>{
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
});

//# sourceMappingURL=homepage.de158e3a.js.map
