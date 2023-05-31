const background = document.getElementById("body");
const container = document.getElementById("container");
const openButton = document.getElementById("open-btn");
const portuguese = document.getElementById("pt-br");
const english = document.getElementById("en-us");
const dialog = document.getElementById("lang");
const home = document.getElementById("home");
const info = document.getElementById("info");

const ptbrContainer = `
    <article class="home-article">
        <div class="resume">
            <h1>Sobre mim</h1>
            <p>Muito prazer, me chamo Willian e tenho 19 anos, atualmente cursando Análise e Desenvolvimento de Sistemas pela Unipar. Sou apaixonado por tecnologia e design, devido a isso sempre estou estudando e fazendo projetos relacionados a qualquer assunto dentro dessas duas grandes áreas. Os projetos são bem variados, isso inclui: Remake de interfaces gráficas, game HUD, landings pages, pequenas manipulações de imagem, game trainers, pequenos programas e afins.</p>
        </div>
        <div class="functions">
            <h1>Áreas de atuação</h1>
            <ul>
                <li>Desenvolvimento Web</li>
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
            <p>Hi! I’m Willian and I've fallen in love with tech and design for as long as I can remember. Actually on a Technology degree by Unipar. I work with graphic design, web development on front-end, video editing and game modding! Some of my projects include: Game UI and HUD remakes, landing pages, some image manipulation on photoshop, game trainers and desktop softwares at all.</p>
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
        <div class="resume">
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

document.addEventListener("DOMContentLoaded", () => {
    container.innerHTML = ptbrContainer;
});

openButton.addEventListener("click", () => {
    dialog.showModal();
    background.classList.add("blur");
});

portuguese.addEventListener("click", () => {
    dialog.close();
    background.classList.remove("blur");
    container.innerHTML = ptbrContainer;
});

english.addEventListener("click", () => {
    dialog.close();
    background.classList.remove("blur");
    container.innerHTML = engContainer;
});

home.addEventListener("click", () => {
    container.innerHTML = ptbrContainer;
});

info.addEventListener("click", () => {
    container.innerHTML = ptbrInfo;
});
