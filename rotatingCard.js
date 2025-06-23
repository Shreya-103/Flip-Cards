let flipCard = document.querySelector(".flipCard");
let textI = document.querySelector(".textI");
flipCard.addEventListener("mouseover", ()=>{
    textI.style.fontSize="20px";
    textI.textContent="Breaking software into independent, interchangeable modules. Each module has a specific responsibility, improving maintainability. Encourages separation of concerns and code reusability.";
});
 flipCard.addEventListener("mouseout", ()=> {
    textI.style.fontSize="40px";
     textI.textContent= "Modularity";
});

// second card
let flipCardII = document.querySelector(".II");
let textII = document.querySelector(".textII");
flipCardII.addEventListener("mouseover", ()=>{
    textII.style.fontSize="20px";
    textII.textContent="The system’s ability to handle growing amounts of work. It includes vertical (more power) and horizontal (more nodes) scaling. Crucial for handling user growth in real-world applications."
});
flipCardII.addEventListener("mouseout", ()=> {
    textII.textContent= "Scalability";
    textII.style.fontSize="40px";
});

//third card
let flipCardIII = document.querySelector(".III");
let textIII = document.querySelector(".textIII");
flipCardIII.addEventListener("mouseover", ()=>{
    textIII.style.fontSize="20px";
    textIII.textContent="Hiding complex logic behind simple interfaces. Allows developers to work on high-level logic without internal details. A core concept in clean, flexible design.";
});
flipCardIII.addEventListener("mouseout", ()=> {
    textIII.textContent= "Abstraction";
    textIII.style.fontSize="40px";

});

//FORTH CARD
let flipCardIV = document.querySelector(".IV");
let textIV = document.querySelector(".textIV");
flipCardIV.addEventListener("mouseover", ()=>{
    textIV.style.fontSize="20px";
    textIV.textContent="Bundling data with the methods that operate on it. Restricts direct access to some of the object's components. Enhances data integrity and security in software design.";
});
flipCardIV.addEventListener("mouseout", ()=> {
    textIV.textContent= "Encapsulation";
    textIV.style.fontSize="40px";

});

//fifth card
let flipCardV = document.querySelector(".V");
let textV = document.querySelector(".textV");
flipCardV.addEventListener("mouseover", ()=>{
    textV.style.fontSize="20px";
    textV.textContent=" The system's ability to recover from failures gracefully. Includes retry strategies, fallbacks, and graceful degradation. Key for building fault-tolerant distributed systems.";
});
flipCardV.addEventListener("mouseout", ()=> {
    textV.textContent= "Resielence";
    textV.style.fontSize="40px";

});

//SIXTH CARD
let flipCardVI = document.querySelector(".VI");
let textVI = document.querySelector(".textVI");
flipCardVI.addEventListener("mouseover", ()=>{
    textVI.style.fontSize="20px";
    textVI.textContent="Executing multiple tasks at the same time, improving performance. Involves threads, async programming, or parallel processes. Essential for responsive UIs and real-time systems.";
});
flipCardVI.addEventListener("mouseout", ()=> {
    textVI.textContent= "Concurrency";
    textVI.style.fontSize="40px";
});

//SEVENTH CARD
let flipCardVII = document.querySelector(".VII");
let textVII = document.querySelector(".textVII");
flipCardVII.addEventListener("mouseover", ()=>{
    textVII.style.fontSize="20px";
    textVII.textContent="How easily a software system can be modified or updated. Good documentation, code readability, and modularity help. Reduces long-term development costs significantly. ";
});
flipCardVII.addEventListener("mouseout", ()=> {
    textVII.textContent= "Maintainability";
    textVII.style.fontSize="40px";
});

//EIGHTTH CARD
let flipCardVIII = document.querySelector(".VIII");
let textVIII = document.querySelector(".textVIII");
flipCardVIII.addEventListener("mouseover", ()=>{
    textVIII.style.fontSize="20px";
  textVIII.textContent="The ability of different systems or components to work together. Often achieved via APIs, standard protocols, or middleware. Critical in microservices, cross-platform apps, and integrations."
});
flipCardVIII.addEventListener("mouseout", ()=> {
    textVIII.textContent= "Interoperability";
    textVIII.style.fontSize="30px";
});
