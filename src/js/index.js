import '../scss/main.scss';
import moment from 'moment';

/* place your code below */
//borrowed from ...
const allRanges = document.querySelectorAll(".range-wrapper");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range--js");
  const bubble = wrap.querySelector(".bubble--js");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
//end

console.log(`It's working!`);

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


const createContent = function() {
    const element = document.querySelector('.current-date--js');
    element.innerHTML = `${moment().format('LL')} ${moment().format('LTS')}`;
};

setInterval(createContent, 1000);
createContent();
console.log('działa?');

