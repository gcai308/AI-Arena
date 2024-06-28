console.log(window.scrollY)
const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let prompt = "";

// get the images
function loadImages() {
    let i=0;
    const labels = [document.createElement('label'), document.createElement('label')];
    const sect = document.createElement('div');
    const images_div = document.createElement('div');
    container.appendChild(sect)

    const holders = [document.createElement('section'), document.createElement('section')];

    const button_array = document.createElement('div');

    const vote_text = document.createElement('header'); 
    vote_text.innerHTML = 'Which one is the better image (prompt adherence, semantics, and aesthetics)?';
    const left = document.createElement('button');
    const tie = document.createElement('button');
    const right = document.createElement('button');

    left.innerHTML = 'L';
    tie.innerHTML = 'T';
    right.innerHTML = 'R';

    let img_prompt = "preloaded prompt " + sect.offsetTop / window.innerHeight;

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
        if (url == 'https://dog.ceo/api/breeds/image/random') {
            img.src = `${data.message}`
        } else {
            img.src = `${data[0].url}`
        }
        holders[0].appendChild(img)
        holders[0].appendChild(labels[0]);
    })

    fetch(url)
    .then(response=>response.json())
    .then(data=> {
        // console.log(data.url)
        const img =  document.createElement('img');
        if (url == 'https://dog.ceo/api/breeds/image/random') {
            img.src = `${data.message}`
        } else {
            img.src = `${data[0].url}`
        }
        holders[1].appendChild(img)
        holders[1].appendChild(labels[1]);
    })

    button_array.appendChild(left);
    button_array.appendChild(tie);
    button_array.appendChild(right);
   
    while(i < 2) {
        labels[i].innerHTML = 'model name here';
        holders[i].className = "holder";

        images_div.appendChild(holders[i])
        images_div.appendChild(holders[i]);
        sect.appendChild(images_div);
        sect.appendChild(vote_text);
        sect.appendChild(button_array);
        
        i++;
    } 

    window.addEventListener("scroll", preload_input);
    left.onclick = vote_listener;
    tie.onclick = vote_listener;
    right.onclick = vote_listener;

    function preload_input() {
        let rect = sect.getBoundingClientRect();
        let height = rect.bottom - rect.top;
        if (window.scrollY >= sect.offsetTop && window.scrollY < sect.offsetTop + height) { 
            img_prompt = "preloaded prompt " + Math.ceil(sect.offsetTop / height);
            prompt = img_prompt;
            document.getElementById("Prompt Box").value = prompt;
        }
    }

    function vote_listener() {
        labels[0].style.display = "block";
        labels[1].style.display = "block";
    }
    i++;
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
    document.getElementById('open_instructions_button').style.display = "none";
    document.getElementById('close_instructions_button').style.display = "block";
}

function closeArenaInstructions() {
    document.getElementById('arena_info').style.display = "none";
    document.getElementById('close_instructions_button').style.display = "none";
    document.getElementById('open_instructions_button').style.display = "block";
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
    //console.log("scrolled", window.scrollY) //scrolled from top
    //console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})

