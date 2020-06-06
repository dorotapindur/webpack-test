//change mode button

let isDark = false;

function buttonText (querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
buttonText ('.change-mode--js', 'tryb ciemny');

const modeButton = document.querySelector('.change-mode--js');
modeButton.addEventListener('click', () => {

  if (isDark == true) {
    document.documentElement.style.setProperty('--my-background', '#758500');
    document.documentElement.style.setProperty('--shadow', '#4b5500');
    document.documentElement.style.setProperty('--light', '#9fb500');
    document.documentElement.style.setProperty('--label', '#1b1f00');
    document.documentElement.style.setProperty('--placeholder', '#adc400');
    document.documentElement.style.setProperty('--light-text', '#e1ff00');
    document.documentElement.style.setProperty('--gradient-from', '#7d8e00');
    document.documentElement.style.setProperty('--gradient-to', '#697800');
    document.documentElement.style.setProperty('--checked-background', '#abc200');
    document.documentElement.style.setProperty('--checked-shadow', '#6d7c00');
    document.documentElement.style.setProperty('--checked-light', '#e9ff00');
    document.documentElement.style.setProperty('--range-thumb-shadow', '#c3d400');

    buttonText ('.change-mode--js', 'tryb ciemny')
    
    isDark = false;
  }
  else {
    document.documentElement.style.setProperty('--my-background', '#272727');
    document.documentElement.style.setProperty('--shadow', '#141414');
    document.documentElement.style.setProperty('--light', '#5e5e5e');
    document.documentElement.style.setProperty('--label', '#a6b449');
    document.documentElement.style.setProperty('--placeholder', '#6b742e');
    document.documentElement.style.setProperty('--light-text', '#bebebe');
    document.documentElement.style.setProperty('--gradient-from', '#2b2a2a');
    document.documentElement.style.setProperty('--gradient-to', '#3a3a3a');
    document.documentElement.style.setProperty('--checked-background', '#abc200');
    document.documentElement.style.setProperty('--checked-shadow', '#6d7c00');
    document.documentElement.style.setProperty('--checked-light', '#e9ff00');
    document.documentElement.style.setProperty('--range-thumb-shadow', '#c3d400');

    buttonText ('.change-mode--js', 'tryb jasny')

    isDark = true;
  }
  console.log('działa!!!')
})