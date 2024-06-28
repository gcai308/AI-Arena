console.log(window.scrollY)
const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let timer = null;
let generating_queue = [];

let prompt = "preloaded prompt";

let current_vid = null;

let scrollers = [];

let prompt_container = document.getElementById('prompt_container');

let prompt_box = document.getElementById('prompt_box');

let generate_btn = document.getElementById('generate_btn');

let popup = document.getElementById('popup');

//$("body").css("overflow", "hidden");
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
    images_div.appendChild(prompt_container);
    images_div.appendChild(l_swipe);
    images_div.appendChild(r_swipe);
    images_div.appendChild(skip);
    images_div.appendChild(popup);

    left.onclick = vote_listener;
    tie.onclick = vote_listener;
    right.onclick = vote_listener;
    tab.onclick = open_leaderboard;
    gen.onclick = display_prompt;
    generate_btn.onclick = generate;

    function vote_listener() {
        labels[0].style.display = "block";
        labels[1].style.display = "block";
    }
    
    sect.style.order = scrollers.length;
    scrollers.push(sect);
}

function display_prompt() {
    if (prompt_container.style.display != "flex") {
        prompt_container.style.display = "flex";
    }
    else {
        prompt_container.style.display = "none";
    }
}

function generate() {
    generating_queue.push(prompt_box.value);
    prompt = prompt_box.value;
    prompt_box.value = "";
    add_generated();
    display_prompt();
    prompt = "preloaded prompt";
}

function add_generated() {
    const nav_btn = document.createElement('button');
    nav_btn.innerHTML = generating_queue[0];
    loadImages();
    scrollers[scrollers.length - 1].style.order = current_vid.style.order;
    scrollers[scrollers.length - 1].className += " generated";
    const generated_vid = scrollers[scrollers.length - 1];
    nav_btn.onclick = scroll_to_vid;
    popup.appendChild(nav_btn);
    popup.style.display = 'flex';
    generating_queue.shift();

    function scroll_to_vid() {
        window.scrollTo(0, generated_vid.offsetTop);
    }

    clearTimeout(timer);
    
    timer = setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}

function open_leaderboard() {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('Leaderboard').style.display = "block";
    document.getElementById('leaderboard_tab').className += " active";
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

    for (let i = 0; i < scrollers.length; i++) {
        let sect = scrollers[i];
        let rect = sect.getBoundingClientRect();
        let height = rect.bottom - rect.top;
        if (window.scrollY >= sect.offsetTop && window.scrollY < sect.offsetTop + height) {
            current_vid = sect;
        }
    }
})
