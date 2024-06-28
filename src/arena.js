console.log(window.scrollY)
const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let prompt = "preloaded prompt";

// get the images
function loadImages() {
    let i=0;
    const labels = [document.createElement('label'), document.createElement('label')];
    const sect = document.createElement('div');
    const images_div = document.createElement('div');

    const model_a = document.createElement('h3');
    const model_b = document.createElement('h3');
    const vid_prompt =  document.createElement('h3');


    container.appendChild(sect)

    const holders = [document.createElement('section'), document.createElement('section')];

    const button_array = document.createElement('div');

    const l_swipe = document.createElement('button');
    const r_swipe = document.createElement('button');
    const skip = document.createElement('button');

    const gen = document.createElement('button');
    const left = document.createElement('button');
    const tie = document.createElement('button');
    const right = document.createElement('button');
    const tab = document.createElement('button');

    vid_prompt.innerHTML = prompt;
    model_a.innerHTML = 'Model A';
    model_b.innerHTML = 'Model B';

    gen.innerHTML = '+';
    left.innerHTML = 'L';
    tie.innerHTML = 'T';
    right.innerHTML = 'R';
    tab.innerHTML = 'H';

    l_swipe.innerHTML = 'A';
    r_swipe.innerHTML = 'D';
    skip.innerHTML = 'SKIP';



    button_array.className = 'button-array';
    images_div.className = 'images-div';
    sect.className = "scroller";
    vid_prompt.className = 'vid-prompt';
    l_swipe.className = 'onscreen-button';
    r_swipe.className = 'onscreen-button';
    skip.className = 'onscreen-button';


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

    model_a.style.bottom = '50%';
    model_b.style.bottom = '50px';
    vid_prompt.style.bottom = '0';
    l_swipe.style.top = '25%';
    l_swipe.style.left = '0';
    r_swipe.style.top = '75%';
    r_swipe.style.right = '0';
    skip.style.top = '0';
    skip.style.right = '0';

    button_array.appendChild(gen);
    button_array.appendChild(left);
    button_array.appendChild(tie);
    button_array.appendChild(right);
    button_array.appendChild(tab);
   
    while(i < 2) {
        labels[i].innerHTML = 'model name here';
        holders[i].className = "holder";

        images_div.appendChild(holders[i])
        sect.appendChild(images_div);
        
        i++;
    } 
    images_div.appendChild(model_a);
    images_div.appendChild(model_b);
    images_div.appendChild(vid_prompt);
    images_div.appendChild(button_array);
    images_div.appendChild(l_swipe);
    images_div.appendChild(r_swipe);
    images_div.appendChild(skip);

    window.addEventListener("scroll", preload_input);
    left.onclick = vote_listener;
    tie.onclick = vote_listener;
    right.onclick = vote_listener;

    function preload_input() {
        // let rect = sect.getBoundingClientRect();
        // let height = rect.bottom - rect.top;
        // if (window.scrollY >= sect.offsetTop && window.scrollY < sect.offsetTop + height) { 
        //     prompt = "preloaded prompt " + Math.ceil(sect.offsetTop / height);
        // }
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

