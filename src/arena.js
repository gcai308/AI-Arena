const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let prompt = "";

// get the images
function loadImages() {
    let i=0;

    const sect = document.createElement('section');
    sect.className = "scroller";
    container.appendChild(sect)

    var liked = [new Boolean(false), new Boolean(false)];

    var like_labels = [document.createElement('label'), document.createElement('label')];

    var comment_labels = [document.createElement('label'), document.createElement('label')];

    const holders = [document.createElement('span'), document.createElement('span')];

    const button_arrays = [document.createElement('span'), document.createElement('span')];
    
    const likes = [document.createElement('button'), document.createElement('button')];

    const comments = [document.createElement('button'), document.createElement('button')];

    var c_sections = [document.createElement('span'), document.createElement('span')];

    const shares = [document.createElement('button'), document.createElement('button')];

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
            holders[0].appendChild(button_arrays[0])
        }
    )

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
            holders[1].appendChild(button_arrays[1])
        }
    )

    function leftClick() {
        if (liked[0] == false) {

            likes[0].innerHTML = '<img src="../images/heartFilled.png" />';
            button_arrays[0].appendChild(like_labels[0])
            button_arrays[0].appendChild(comments[0])
            button_arrays[0].appendChild(comment_labels[0])
            button_arrays[0].appendChild(shares[0])
    
            liked[0] = new Boolean(true);
        }
    }

    function rightClick() {
        if (liked[1] == false) {
            likes[1].innerHTML = '<img src="../images/heartFilled.png" />';
            button_arrays[1].appendChild(like_labels[1])
            button_arrays[1].appendChild(comments[1])
            button_arrays[1].appendChild(comment_labels[1])
            button_arrays[1].appendChild(shares[1])

            liked[1] = new Boolean(true);
        }
    }

    function leftComment() {
        holders[0].appendChild(c_sections[0]);
    }
    
    function rightComment() {
        holders[1].appendChild(c_sections[1]);
    }
        
    while(i < 2) {
        holders[i].className = "holder";
        c_sections[i].className = "comment-section";
        button_arrays[i].className = "button-array";

        likes[i].innerHTML = '<img src="../images/heartEmpty.png" />';
        comments[i].innerHTML = '<img src="../images/comment.png" />';
        shares[i].innerHTML = '<img src="../images/share.png" />';
        like_labels[i].innerHTML = Math.floor(Math.random() * 1000);
        comment_labels[i].innerHTML = Math.floor(Math.random() * 1000);
        sect.appendChild(holders[i])
        button_arrays[i].appendChild(likes[i])
        sect.appendChild(holders[i]);
        button_arrays[i].appendChild(likes[i])
    
        
    
    
        i++;
    } 

    likes[0].addEventListener("click", leftClick);
    likes[1].addEventListener("click", rightClick);

    comments[0].addEventListener("click", leftComment);
    comments[1].addEventListener("click", rightComment);

}

function submitText() {
    prompt = document.getElementById('Prompt Box').value;
    clear()
}

function clear() {
    document.getElementById("arena_container").innerHTML = "";
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

