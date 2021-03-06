var data = [
    {
        front : "About",
        back : "Tech Stack"
    },
    {
        front : "Resume",
        back : "Profile"
    }
];

var rightSection = document.getElementById("rightSection");
var fragment = document.createDocumentFragment(); 


for(let val in data){
    const rightContent = document.createElement("div");
    rightContent.className = "right-content right-content" + val;
    rightContent.id = "rightContent" + val;
    rightContent.onclick = function(){
        handleClick(rightContent,val)
    }
    const frontEle = document.createElement("div");
    frontEle.className = "front";
    frontEle.id = "front" + val;
    const backEle = document.createElement("div");
    backEle.className = "back";
    backEle.id = "back" + val;
    frontEle.innerHTML = returnHTML(data[val].front);
    backEle.innerHTML = returnHTML(data[val].back);
    rightContent.appendChild(backEle);
    rightContent.appendChild(frontEle);
    fragment.appendChild(rightContent);
}
rightSection.appendChild(fragment);


function getAboutContent(){
    return `<div class='list-items'>
    <div>
    <h3><i>Highly motivated and skilled Web developer. Here are some points that describes me :-</i></h3>
    <ul>
    <li>Code fanatic</li>
    <li>Frontend developer with keen eye for detail</li>
    <li>Javascript developer</li>
    <li>2+ years of expertise in web development</li>
    <li>Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies</li>
    <li>Also have some experience in backend development</li>
    <li>ML/AI/Data Science enthusiast</li>
    <li>Strong grasp of data structures and algorithms</li>
    <li>Problem solver</li>
    <li>Loves building responsive and highly optimised apps</li>
    </ul>
    </div>
    <div class="disclaimer-text">
    <h4>Open to know more</h4><img src="./images/right-arrow.png" alt="right" />
    </div>
    </div>`
}

function getHeadingText(heading){
    return `<h2 class="heading-text">${heading}</h2>`
}

function getTechStack(){
    return`
    <div class="flex items-center heading-tech">
    ${getHeadingText("Tech Stack")}
    <img src="./images/tool.png" alt="" />
    </div>
    <div class="flex flex-col h-85 justify-between">
    <div class="grid">
    <img src="./images/js.png" alt="" />
    <img src="./images/html.png" alt="" />
    <img src="./images/git.png" alt="" />
    <img src="./images/linux.png" alt="" />
    <img src="./images/nodejs.png" alt="" />
    <img src="./images/react.png" alt="" />
    <img src="./images/redux.png" alt="" />
    <img src="./images/sass.png" alt="" />
    <img src="./images/jest.png" alt="" />
    </div>
    <div class="tech-stack-names">
    <p>React | React Native | Redux | Javascript | Nodejs | MongoDB | MySQL | html | Css | Sass | Styled Components | linux | git | Data structures and algorithms | Jest | Webpack | Puppeteer | Data Science | C++ | Python</p>
    </div>
    </div>
    `
}

function getResumeContent(){
    return`
    <div class="resume-page">
    <img class="resume-img" src="./images/cv.jpeg" alt="resume" />
    <div id="downloadButton" class="download-option">
    <h4>Download Resume</h4>
    <img src="./images/down.png" alt="" />
    </div>
    </div>
    `
}

function profileSection(){
    return`
    <div class="profile-section">
    <div class="profile-mask">
    <div class="followme-section">
    <marquee><i>Follow Me</i></marquee>
    <div class="logo-section">
    <a id="atag" href="https://www.linkedin.com/in/mahima-sharma-b7335a12b/" target="_blank"><img src="./images/linkedin1.png" alt="" /></a>
    <a id="atag" href="https://github.com/mahi-ma" target="_blank"><img src="./images/github.png" alt="" /></a>
    <a id="atag" href="https://mahimasharma0309.medium.com/" target="_blank"><img src="./images/medium.png" alt="" /></a>
    </div>
    </div>
    </div>
    </div>
    `
}

function returnHTML(node){
    switch(node){
        case "About" : return getAboutContent();
        case "Tech Stack" : return getTechStack();
        case "Resume" : return getResumeContent();
        case "Profile": return profileSection();
        default : return ""
    }
}


function handleClick(rightContentElement,index){
    if(rightContentElement.classList.contains("flip-forward")){
        rightContentElement.classList.remove("flip-forward");
        rightContentElement.classList.add("flip-back");
    }else{
        rightContentElement.classList.add("flip-forward");
        rightContentElement.classList.remove("flip-back");
    }

    if(rightContentElement.classList.contains("right-content" + index)){
        rightContentElement.classList.remove("right-content" + index);
        rightContentElement.classList.add("rightContentFlipped" + index);
    }
    else{
        rightContentElement.classList.add("right-content" + index);
        rightContentElement.classList.remove("rightContentFlipped" + index); 
    }
}

var downloadButton = document.getElementById("downloadButton");
downloadButton.onclick = function(e){
    e.stopPropagation();
    console.log("generating resume...")
    window.open("https://drive.google.com/file/d/1zpCYgp_AcIBApyWBh3mgRUIgHNPRvnn3/view?usp=sharing","_blank");
}
document.getElementById("atag").addEventListener("click", function(event) {
    console.log("href clicked, lets try to stop event propagation");
    event.preventDefault();
    return false;
});