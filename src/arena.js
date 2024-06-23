const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let prompt = "";

// get the images
function loadImages() {
    let i=0;

    const sect = document.createElement('div');
    const images_div = document.createElement('div');
    container.appendChild(sect)

    const holders = [document.createElement('section'), document.createElement('section')];

    const button_array = document.createElement('div');

    const vote_text = document.createElement('header'); 
    vote_text.innerHTML = 'Which one is the better image (prompt adherence, semantics, and aesthetics)?';
    const left = document.createElement('button');
    const right = document.createElement('button');
    const tie = document.createElement('button');

    left.innerHTML = 'Left'; 
    right.innerHTML = 'Right';
    tie.innerHTML = 'Tie';

    button_array.className = 'button-array';
    images_div.className = 'images-div';
    sect.className = "scroller";


    let url='https://dog.ceo/api/breeds/image/random';
    if (prompt.length > 0) {
        url='https://api.thecatapi.com/v1/images/search';
    }

    fetch(url)
    .then(response=>response.json())
    .then(data=> {
        // console.log(data.url)
        const img =  document.createElement('img');
        if (prompt.length == 0) {
            img.src = `${data.message}`
        } else {
            img.src = `${data[0].url}`
        }
        holders[0].appendChild(img)
    })

    fetch(url)
    .then(response=>response.json())
    .then(data=> {
        // console.log(data.url)
        const img =  document.createElement('img');
        if (prompt.length == 0) {
            img.src = `${data.message}`
        } else {
            img.src = `${data[0].url}`
        }
        holders[1].appendChild(img)
    })

    button_array.appendChild(left);
    button_array.appendChild(right);
    button_array.appendChild(tie);
   
    while(i < 2) {

        holders[i].className = "holder";

        images_div.appendChild(holders[i])
        images_div.appendChild(holders[i]);
        sect.appendChild(images_div);
        sect.appendChild(vote_text);
        sect.appendChild(button_array);
    
        i++;
    } 
}


function submitText() {
    prompt = document.getElementById('Prompt Box').value;
    clear()
}

function clear() {
    document.getElementById("arena_container").innerHTML = "";
}

function openArenaInstructions() {
    document.getElementById('arena_info').style.display = "block";
    document.getElementById('close_instructions_button').style.display = "block";
}

function closeArenaInstructions() {
    document.getElementById('arena_info').style.display = "none";
    document.getElementById('close_instructions_button').style.display = "none";
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

