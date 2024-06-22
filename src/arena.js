const container = document.querySelector('.container');

//const URL = 'https://dog.ceo/api/breeds/image/random'

let prompt = "";

// get the images
function loadImages() {
    let i=0;

    const sect = document.createElement('div');
    sect.className = "scroller";
    container.appendChild(sect)

    let liked = [new Boolean(false), new Boolean(false)];

    let like_labels = [document.createElement('label'), document.createElement('label')];

    var comment_labels = [document.createElement('label'), document.createElement('label')];

    const holders = [document.createElement('section'), document.createElement('section')];

    const button_arrays = [document.createElement('span'), document.createElement('span')];
    
    const likes = [document.createElement('button'), document.createElement('button')];

    const comments = [document.createElement('button'), document.createElement('button')];

    let c_sections = [document.createElement('section'), document.createElement('section')];

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
            holders[0].appendChild(c_sections[0])
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
            holders[1].appendChild(c_sections[1])
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
        c_sections[0].style.display = 'flow'
    }
    
    function rightComment() {
        c_sections[1].style.display = 'flow'
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

        c_sections[i].style.display = 'none';

        loadComments(c_sections[i]);
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

function loadComments(c_section) {
    
       let header = document.createElement('header');
       let textbox = document.createElement('input');
       let submit = document.createElement('button');
       let close = document.createElement('button');
       let num_comments = Math.floor(Math.random() * 10)
        textbox.type = "text";
        textbox.placeholder = "Add a comment...";
        header.innerHTML = 'Comments ';
        submit.innerHTML = 'Enter';
        close.innerHTML = 'Close';
        submit.onclick = send_comment;
        close.onclick = close_section;
        c_section.appendChild(close);
        c_section.appendChild(header);
        c_section.appendChild(textbox);
        c_section.appendChild(submit);

        function send_comment() {
            textbox.value = "";
        }

        function close_section() {
            c_section.style.display = 'none';
        }

       for (let i = 0; i < num_comments; i++) {
            const comment = 'lorem ipsum dolor sit amet, consectetur adipiscing';
            const reply_text = 'lorem ipsum dolor sit amet';
            const username = 'guest'
            const date = '4/19'

            const block = document.createElement('div');
            const pfp = document.createElement('img');
            const info = document.createElement('p');
            const commenttext = document.createElement('p');
            const like = document.createElement('button');
            const reply = document.createElement('button');
            const show = document.createElement('button');
            const replies = document.createElement('div');

            let is_liked = new Boolean(false);


            function show_replies() {
                if (replies.style.display != 'none')
                    replies.style.display = 'none'
                else 
                    replies.style.display = 'flow';
            }

            function set_receiver() {
            }

            function comment_liked() {
                if (is_liked == false) 
                    like.innerHTML = '<img src="../images/heartFilled.png" />'

                else 
                    like.innerHTML = '<img src="../images/heartEmpty.png" />'
                is_liked = new Boolean(is_liked == false);
                
            }

            for (let j = 0; j < num_comments / 2; j++) {
                let is_reply_liked = new Boolean(false);
                function reply_liked() {
                    if (is_reply_liked == false) 
                        like_reply.innerHTML = '<img src="../images/heartFilled.png" />'

                    else 
                        like_reply.innerHTML = '<img src="../images/heartEmpty.png" />'
                    is_reply_liked = new Boolean(is_reply_liked == false);
                
                }
                const user_reply = document.createElement('p');
                const like_reply = document.createElement('button');

                like_reply.className = 'comment-like-button';
                like_reply.innerHTML = '<img src="../images/heartEmpty.png" />';
                like_reply.onclick = reply_liked;

                user_reply.innerHTML = reply_text;
                replies.appendChild(user_reply);
                replies.appendChild(like_reply);
            }

            like.className = "comment-like-button";
            pfp.className = "pfp";
            replies.style.display = 'none';
            show.onclick = show_replies;
            reply.onclick = set_receiver;
            like.onclick = comment_liked;


            commenttext.innerHTML = comment;
            info.innerHTML = username + ' ' + date;
            pfp.src = '../images/pfp.png';
            like.innerHTML = '<img src="../images/heartEmpty.png" />';
            reply.innerHTML = 'Reply to comment'
            show.innerHTML = 'replies'

            block.append(pfp);
            block.append(info);
            block.append(commenttext);
            block.append(like);
            block.append(reply);
            block.append(show);
            block.append(replies);
            c_section.appendChild(block);
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

