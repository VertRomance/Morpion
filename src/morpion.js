const scoreP = $("#scorePlayer");
const scoreC = $("#scoreCPU");
let addPoint = 0;
let addPointCPU = 0;
const min = 0;
const max = 8;
const random = Math.random() * (max - min) + min;

const results = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const hasWin = (shape) => {

    for (const key in results) {
        if ($("#case" + results[key][0]).hasClass(shape)
            && $("#case" + results[key][1]).hasClass(shape)
            && $("#case" + results[key][2]).hasClass(shape)) {

            chronoPause();
            changeStatus(btnResume, btnStart)
            pauseJeu();
            return true;
        }
    }
}

let emptyCase = [];

const addCross = () => {
    emptyCase = [];
    $(".case").each((index) => {

        if ($("#case" + index).hasClass('circle') !== true
            && $("#case" + index).hasClass('cross') !== true) {

            emptyCase.push(index);

            const found = emptyCase.find((index) => {
                $("#case" + emptyCase).addClass('cross')

            })
        }
    })
    if (hasWin('cross')) {
        scoreC.text(addPointCPU = addPointCPU + 1);
    }
}

const mark = (e) => {
    const target = $(e.target);
    target.addClass('circle');

    if (hasWin('circle')) {
        scoreP.text(addPoint = addPoint + 1);
    } else {
        setTimeout(addCross, 1000);

    }
        
    if (emptyCase.length===2){
        console.log("Fin de partie");
        
    }
}

const activeJeu = () => {
    $(".case").removeClass("circle");
    $(".case").removeClass("cross");
    $(".case").on("click", mark);
};
$("#timerStart").on("click", activeJeu);

const pauseJeu = () => {
    $(".case").off("click", mark);
};
$("#timerPause").on("click", pauseJeu);

const ResumeJeu = () => {
    $(".case").on("click", mark);
};
$("#timerResume").on("click", ResumeJeu);


// la const min est de 0 et la const max de 8 et une const random permettra au cpu 
// qui choisira une case qui n'est pas la même que le joueur entre 0 et 8























// const sayHello = (e) => {
 // Comment récupérer l'élément qui est la cible de l'evènement
//  const target = $(e.target);

//  console.log(target);

// };

// const sayWorld = () => {
//  console.log("World");
// };

// Ajouter un évènement
// $("#timerStart").on("click", sayHello);
// $("#timerStart").on("click", sayWorld);

// Enlever un évènement
// $("#timerStart").off("click", sayHello);

// Ajouter un évènement sur plusieurs éléments
// $(".case").on("click", sayHello)