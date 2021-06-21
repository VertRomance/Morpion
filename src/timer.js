
const btnStart=$("#timerStart");
const btnPause=$("#timerPause");
const btnResume=$("#timerResume");
const chrono= $("#timerTime");
let secondPast=0;
const maxTime=600;

const chronoStart = () => {
    changeStatus(btnStart, btnPause);
    intervalId=setInterval(increment, 1000);
    // chrono.text("00:00");
    secondPast=0;
    minutePast=0;
    increment();
}
btnStart.on("click", chronoStart);

const chronoPause = () => {
    changeStatus(btnPause, btnResume);
    clearInterval(intervalId);
}
btnPause.on("click", chronoPause);

const chronoResume = () => {
    changeStatus(btnResume, btnPause);
    intervalId=setInterval(increment, 1000);
}
btnResume.on("click", chronoResume);

const changeStatus =(a, b) => {
    a.removeClass('d-block');
    a.addClass('d-none');
    b.removeClass('d-none');
    b.addClass('d-block');
}

const increment=()=>{
        chrono.text (new Date(secondPast * 1000).toISOString().substr(14, 5));
        secondPast=secondPast + 1;
        // if(secondPast===60){
        //     minutePast=minutePast + 1;
        //     secondPast= 0;
        }

    // myTime.text(`${minutePast}:${secondPast}`);


const myTime=()=>{
    console.log(myTime.setMinutes(0,0));
    
}




// console.log($);

// const btnStart=$("#timerStart");
// const btnPause=$("#timerPause");
// const btnResume=$("#timerResume");
// const chrono= timerTime;

// const chronoStart =() => {
//     btnStart.removeClass('d-block');
//     btnStart.addClass('d-none');
//     btnPause.removeClass('d-none');
//     btnPause.addClass('d-block');
// };
// btnStart.on("click", chronoStart);

// const chronoPause=() => {
//     btnPause.removeClass('d-block');
//     btnPause.addClass('d-none');
//     btnResume.removeClass('d-none');
//     btnResume.addClass('d-block');
// };
// btnPause.on("click", chronoPause);

// const chronoResume =() => {
//     btnResume.removeClass('d-block');
//     btnResume.addClass('d-none');
//     btnPause.removeClass('d-none');
//     btnPause.addClass('d-block');
// };
// btnResume.on("click", chronoResume);

