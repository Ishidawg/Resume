const background = document.getElementById("body");
const container = document.getElementById("container");
const openButton = document.getElementById("open-btn");
const portuguese = document.getElementById("pt-br");
const english = document.getElementById("en-us");
const dialog = document.getElementById("lang");
const home = document.getElementById("home");
const info = document.getElementById("info");
const homeEllipse = document.getElementById("home-ellipse");
const infoEllipse = document.getElementById("info-ellipse");

const openMenu = document.getElementById("open-btn-menu");
const menu = document.getElementById("menu");
const mobileHome = document.getElementById("dialog-home");
const mobileInfo = document.getElementById("dialog-info");

const homeDialog = document.getElementById("dialog-home");
const infoDialog = document.getElementById("dialog-info");

const langTitle = document.getElementById("lang-title");
const menuTitle = document.getElementById("menu-title");

var pageState = "port";
var pageSection = "home";

const ptbrDialogMenu = `
    <h1>Páginas</h1>
`;

const engDialogMenu = `
    <h1>Pages</h1>
`;

const ptbrHomeButton = `
    <span>Início</span>
`;

const engHomeButton = `
    <span>Home</span>
`;

const ptbrInfoButton = `
    <span>Sobre</span>
`;

const engInfoButton = `
    <span>About</span>
`;

const ptbrLangDialog = `
    <h1>Idioma</h1>
`;

const engLangDialog = `
    <h1>Language</h1>
`;

const ptbrContainer = `
    <article class="home-article">
        <div class="resume">
            <h1>Sobre mim</h1>
            <p>Muito prazer, chamo-me Willian e tenho 19 anos. Atualmente cursando Análise e Desenvolvimento de Sistemas pela Unipar. Sou apaixonado por tecnologia e design, devido a isso sempre estou estudando e fazendo projetos relacionados a qualquer assunto dentro dessas grandes áreas. Os projetos são bem variados, isso inclui: remake de interfaces gráficas, game HUD, landings pages, pequenas manipulações de imagem, game trainers, pequenos programas e afins.</p>
        </div>
        <div class="functions">
            <h1>Áreas de atuação</h1>
            <ul>
                <li>Desenvolvedor Web</li>
                <li>Designer Gráfico</li>
                <li>Editor de Vídeo</li>
                <li>Game Modder</li>
            </ul>
        </div>
    </article>
`;

const engContainer = `
    <article class="home-article">
        <div class="resume">
            <h1>About me</h1>
            <p>Hi! I’m Willian and I've fallen in love with tech and design for as long as I can remember. Actually on a Technology degree by Unipar. I work with graphic design, web development on front-end, video editing and game modding! Some of my projects include: game UI and HUD remakes, landing pages, some image manipulation on photoshop, game trainers and desktop softwares at all.</p>
        </div>
        <div class="functions">
            <h1>Work as</h1>
            <ul>
                <li>Web Developer</li>
                <li>Graphic Designer</li>
                <li>Video Editor</li>
                <li>Game Modder</li>
            </ul>
        </div>
    </article>
`;

const ptbrInfo = `
    <article class="home-article">
        <div class="info-job">
            <h1>Experiência profissional</h1>
            <ul>
                <li>Desenvolvedor Front-end | estágio</li>
                <li>Manipulação de imagem | freelancer</li>
            </ul>
        </div>
        <hr>
        <div class="college">
            <h1>Formação</h1>
            <p>Formado pela Instituição Federal do Paraná no curso ensino médio integrado de TI em 2023. Atualmente cursando Análise e Desenvolvimento de Sistemas pela Unipar.</p>
        </div>
        <hr>
        <div class="job-stuff">
            <h1>Ferramentas de trabalho</h1>
            <section class="desing">
                <img class="svg job-svg svg-adjust" src="./svg/Figma.svg" alt="figma">
                <img class="svg job-svg svg-adjust" src="./svg/Photoshop.svg" alt="photoshop">
                <img class="svg job-svg svg-adjust" src="./svg/Premiere Pro.svg" alt="Premiere">
                <img class="svg job-svg svg-adjust" src="./svg/After Effects.svg" alt="after-effects">
            </section>
            <section class="code">
                <img class="svg code-svg svg-adjust html" src="./svg/logo-html5.svg" alt="html">
                <img class="svg code-svg svg-adjust css" src="./svg/logo-css3.svg" alt="css">
                <img class="svg code-svg svg-adjust js" src="./svg/logo-javascript.svg" alt="js">
                <img class="svg code-svg svg-adjust python" src="./svg/logo-python.svg" alt="python">
            </section>
        </div>
    </article>
`;

const engInfo = `
    <article class="home-article">
        <div class="info-job">
            <h1>Professional experience</h1>
            <ul>
                <li>Front-end developer | internship</li>
                <li>Image manipulation | freelancer</li>
            </ul>
        </div>
        <hr>
        <div class="college">
            <h1>Academic | Educational</h1>
            <p>I'm completed high school integrated IT course by Federal Institution of Paraná (IFPR) in 2023. Actually on a Technology degree by Unipar.</p>
        </div>
        <hr>
        <div class="job-stuff">
            <h1>Work tools</h1>
            <section class="desing">
                <img class="svg job-svg svg-adjust" src="./svg/Figma.svg" alt="figma">
                <img class="svg job-svg svg-adjust" src="./svg/Photoshop.svg" alt="photoshop">
                <img class="svg job-svg svg-adjust" src="./svg/Premiere Pro.svg" alt="Premiere">
                <img class="svg job-svg svg-adjust" src="./svg/After Effects.svg" alt="after-effects">
            </section>
            <section class="code">
                <img class="svg code-svg svg-adjust html" src="./svg/logo-html5.svg" alt="html">
                <img class="svg code-svg svg-adjust css" src="./svg/logo-css3.svg" alt="css">
                <img class="svg code-svg svg-adjust js" src="./svg/logo-javascript.svg" alt="js">
                <img class="svg code-svg svg-adjust python" src="./svg/logo-python.svg" alt="python">
            </section>
        </div>
    </article>
`;

document.addEventListener("DOMContentLoaded", () => {
    menuTitle.innerHTML = ptbrDialogMenu;
    homeDialog.innerHTML = ptbrHomeButton;
    infoDialog.innerHTML = ptbrInfoButton;
    langTitle.innerHTML = ptbrLangDialog;

    container.innerHTML = ptbrContainer;
    homeEllipse.classList.add("light-ellipse");
    infoEllipse.classList.add("dark-ellipse");

    pageSection = "home";
    pageState = "port";
});

openButton.addEventListener("click", () => {
    dialog.showModal();
    background.classList.add("blur");
});

openMenu.addEventListener("click", () => {
    menu.showModal();
    background.classList.add("blur");
});

portuguese.addEventListener("click", () => {
    dialog.close();
    background.classList.remove("blur");

    pageState = "port";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }

    menuTitle.innerHTML = ptbrDialogMenu;
    langTitle.innerHTML = ptbrLangDialog;
    homeDialog.innerHTML = ptbrHomeButton;
    infoDialog.innerHTML = ptbrInfoButton;
});

english.addEventListener("click", () => {
    dialog.close();
    background.classList.remove("blur");

    pageState = "eng";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }

    menuTitle.innerHTML = engDialogMenu;
    langTitle.innerHTML = engLangDialog;
    homeDialog.innerHTML = engHomeButton;
    infoDialog.innerHTML = engInfoButton;
});

home.addEventListener("click", () => {
    pageSection = "home";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }

    homeEllipse.classList.remove("dark-ellipse");
    homeEllipse.classList.add("light-ellipse");
    infoEllipse.classList.remove("light-ellipse");
    infoEllipse.classList.add("dark-ellipse");
});

info.addEventListener("click", () => {
    pageSection = "info";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }

    homeEllipse.classList.remove("light-ellipse");
    homeEllipse.classList.add("dark-ellipse");
    infoEllipse.classList.remove("dark-ellipse");
    infoEllipse.classList.add("light-ellipse");
});

mobileHome.addEventListener("click", () => {
    menu.close();
    background.classList.remove("blur");

    pageSection = "home";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }
});

mobileInfo.addEventListener("click", () => {
    menu.close();
    background.classList.remove("blur");

    pageSection = "info";

    if (pageSection == "home") {
        if (pageState == "port") {
            container.innerHTML = ptbrContainer;
        } else {
            container.innerHTML = engContainer;
        }
    } else {
        if (pageState == "port") {
            container.innerHTML = ptbrInfo;
        } else {
            container.innerHTML = engInfo;
        }
    }
});
