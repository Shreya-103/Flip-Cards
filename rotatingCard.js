let flipCard = document.querySelector(".flipCard");
let textI = document.querySelector(".textI");
flipCard.addEventListener("mouseover", ()=>{
    textI.style.fontSize="20px";
    textI.textContent="Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.";
});
 flipCard.addEventListener("mouseout", ()=> {
    textI.style.fontSize="40px";
     textI.textContent= "JAVA";
});

// second card
let flipCardII = document.querySelector(".II");
let textII = document.querySelector(".textII");
flipCardII.addEventListener("mouseover", ()=>{
    textII.style.fontSize="20px";
    textII.textContent="C is mother of all language..C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language.";
});
flipCardII.addEventListener("mouseout", ()=> {
    textII.textContent= "C";
    textII.style.fontSize="40px";
});

//third card
let flipCardIII = document.querySelector(".III");
let textIII = document.querySelector(".textIII");
flipCardIII.addEventListener("mouseover", ()=>{
    textIII.style.fontSize="20px";
    textIII.textContent="C++ is advanced version of C.C++ is a computer programming language developed by Bjarne Stroustrup as an extension of the C language. It is known for is fast speed, low level memory management and is often taught as first programming language. It provides:Hands-on application of different programming concepts. Similar syntax to C and other popular languages making it easier to switch.";
});
flipCardIII.addEventListener("mouseout", ()=> {
    textIII.textContent= "C++";
    textIII.style.fontSize="40px";

});

//FORTH CARD
let flipCardIV = document.querySelector(".IV");
let textIV = document.querySelector(".textIV");
flipCardIV.addEventListener("mouseover", ()=>{
    textIV.style.fontSize="20px";
    textIV.textContent="Python is easiest language. Python is a widely used high-level, interpreted programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code. Python is a programming language that lets you work quicklY.";
});
flipCardIV.addEventListener("mouseout", ()=> {
    textIV.textContent= "PYTHON";
    textIV.style.fontSize="40px";

});

//fifth card
let flipCardV = document.querySelector(".V");
let textV = document.querySelector(".textV");
flipCardV.addEventListener("mouseover", ()=>{
    textV.style.fontSize="20px";
    textV.textContent="Web development is one of the cruiciial thing in it sector. Web development offers numerous benefits, including enhanced brand identity, increased reach and visibility, better customer engagement, cost-effectiveness, and the ability to stand out from competitors. It also facilitates access to information, boosts sales and conversions, and provides opportunities for advertising and process automation. ";
});
flipCardV.addEventListener("mouseout", ()=> {
    textV.textContent= "Web Development";
    textV.style.fontSize="40px";

});

//SIXTH CARD
let flipCardVI = document.querySelector(".VI");
let textVI = document.querySelector(".textVI");
flipCardVI.addEventListener("mouseover", ()=>{
    textVI.style.fontSize="20px";
    textVI.textContent="Data science filed has highest paying jobs.Data science offers numerous benefits, including improved decision-making, increased efficiency, enhanced customer experience, and the ability to identify patterns and trends for better business outcomes and risk mitigation";
});
flipCardVI.addEventListener("mouseout", ()=> {
    textVI.textContent= "DATA SCIENCE";
    textVI.style.fontSize="40px";
});

//SEVENTH CARD
let flipCardVII = document.querySelector(".VII");
let textVII = document.querySelector(".textVII");
flipCardVII.addEventListener("mouseover", ()=>{
    textVII.style.fontSize="20px";
    textVII.textContent="App development offers numerous benefits, including increased accessibility, enhanced customer engagement, streamlined operations, and competitive advantages, making it a valuable tool for businesses and individuals alike. ";
});
flipCardVII.addEventListener("mouseout", ()=> {
    textVII.textContent= "App Development";
    textVII.style.fontSize="40px";
});

//EIGHTTH CARD
let flipCardVIII = document.querySelector(".VIII");
let textVIII = document.querySelector(".textVIII");
flipCardVIII.addEventListener("mouseover", ()=>{
    textVIII.style.fontSize="15px";
    textVIII.textContent="Studying artificial intelligence (AI) and machine learning (ML) can be beneficial for a number of reasons, including: Career opportunities: AI and ML are rapidly growing fields with a wide range of job opportunities in industries like healthcare, finance, and e-commerce. Business benefits: AI and ML can help businesses improve efficiency, customer experience, and decision-making. Innovation: AI and ML can help businesses create new design possibilities and innovate more. Data-driven insights: AI and ML can help businesses analyze and activate a wider range of data sources"});
flipCardVIII.addEventListener("mouseout", ()=> {
    textVIII.textContent= "AI&ML";
    textVIII.style.fontSize="40px";
});
