const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

// get the images
function loadImages() {
    let i=0;

    const sect = document.createElement('section');
    sect.className = "scroller";
    container.appendChild(sect)

    const liked = new Boolean(false);

    const holders = [document.createElement('span'), document.createElement('span')];

    const button_arrays = [document.createElement('span'), document.createElement('span')];
    
    const likes = [document.createElement('button'), document.createElement('button')];

    const comments = [document.createElement('button'), document.createElement('button')];

    const shares = [document.createElement('button'), document.createElement('button')];


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=> {
            // console.log(data.message)
              const img =  document.createElement('img');
              img.src = `${data.message}`
              holders[0].appendChild(img)
              holders[0].appendChild(button_arrays[0])
        })

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=> {
            // console.log(data.message)
              const img =  document.createElement('img');
              img.src = `${data.message}`
              holders[1].appendChild(img)
              holders[1].appendChild(button_arrays[1])
        })

        function likeClickHandler() {
            if (liked == false) {
    
                button_arrays[0].appendChild(comments[0])
                button_arrays[0].appendChild(shares[0])
    
                button_arrays[1].appendChild(comments[1])
                button_arrays[1].appendChild(shares[1])
                liked = new Boolean(true);
            }
        }
        
        while(i < 2) {
            holders[i].className = "holder";
    
            
            button_arrays[i].className = "button-array";
    
            sect.appendChild(holders[i]);
            button_arrays[i].appendChild(likes[i])
    
            likes[i].addEventListener("click", likeClickHandler)
    
    
            i++;
        } 
}

function openArenaInstructions() {
    document.getElementById('Arena Info').style.display = "block";
}

function closeArenaInstructions() {
    document.getElementById('Arena Info').style.display = "none";
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
loadImages()

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll', ()=> {
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})

