//moment-date and time (with ticking seconds)

import moment from 'moment';

console.log(`It's working!`);

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


const createContent = function() {
    const element = document.querySelector('.current-date--js');
    element.innerHTML = `${moment().format('LL')} ${moment().format('LTS')}`;
};

setInterval(createContent, 1000);
createContent();
console.log('działa?');
