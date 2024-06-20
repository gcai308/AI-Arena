const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

// get the images
function loadImages(numImages = 2) {
    let i=0;
    const sect = document.createElement('section');
    var index = Math.floor(Math.random() * 4)
    var colorslist = ['blue','red','green','yellow','brown']
    var mycolor = colorslist[index]
    sect.style.setProperty('background-color', mycolor, 'important');
    sect.className = "scroller";
    container.appendChild(sect)
    while(i < 2) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=> {
            // console.log(data.message)
              //const holder = document.createElement('span');
              //holder.className = "holder";
            //    index = Math.floor(Math.random() * 4)
            //    mycolor = colorslist[index]
              //holder.style.setProperty('background-color', mycolor, 'important');
              //container.appendChild(holder);
              const img =  document.createElement('img');
              //const like = document.createElement('button');
              img.src = `${data.message}`
               sect.appendChild(img)
               //sect.appendChild(like)
        })
        i++;
    }   
}
/*
function loadImages(numImages = 10) {
    let i=0;
    while(i < numImages) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=> {
            // console.log(data.message)
            const img =  document.createElement('iframe');
            img.width = 600;
	    img.height = 400;
            img.src = "https://www.youtube.com/embed/tgbNymZ7vqY"
            container.appendChild(img)
        })
        i++;
    }   
}
*/
loadImages(2);

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll', ()=> {
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})

