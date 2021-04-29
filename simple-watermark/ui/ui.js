var logo = document.getElementById("logo-container");
var serverName = document.getElementById("name-container");
var link = document.getElementById("link-container");

var nameText = document.getElementById("name");
var linkText = document.getElementById("link");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('message', (event) => {
    if (event.data.type === 'setup') {
      nameText.innerHTML = event.data.nametext;
      linkText.innerHTML = event.data.linktext;
    }
});

window.addEventListener('message', (event) => {
    if (event.data.type === 'showItem') {
      logo.style.opacity = 0 + '%';
      serverName.style.opacity = 0 + '%';
      link.style.opacity = 0 + '%';

      sleep(1000).then(() => {
        if (event.data.item === 'link') {
          link.style.opacity = 100 + '%';
        } else if (event.data.item === 'name') {
          serverName.style.opacity = 100 + '%';
        } else if (event.data.item === 'logo') {
          logo.style.opacity = 100 + '%';
        }
      });
    }
});
