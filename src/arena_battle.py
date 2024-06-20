import gradio as gr
import data
import urllib.request

def generate(prompt):
    current = prompt
    url = "https://www.www.youtube.com/results?search_query="
    youtubeQuery = prompt.split()
    for i in youtubeQuery:
        url += i + "+"
    url = url[0:url.len() - 1]
    webUrl = urllib.request.urlopen('https://www.www.youtube.com/results?search_query=' + current)
    htmldata = webUrl.read()
    link1 = ""
    link2 = ""
    index = 0
    while (htmldata[index] != "/"): 
        index = htmldata.find("yt-simple-endpoint inline-block style-scope ytd-thumbnail", index) + 109
    link1 = htmldata[index : htmldata.find("\"", index)]
    index = index + 1
    while (htmldata[index] != "/"): 
        index = htmldata.find("yt-simple-endpoint inline-block style-scope ytd-thumbnail", index) + 109
    link2 = htmldata[index : htmldata.find("\"", index)]
    

    return "Clutch.mp4","Whiff.mp4" #Use other mp4s

def a_vote(prompt):
    data.add_entry(prompt, 'test', 'test', 0)
def b_vote(prompt):
    data.add_entry(prompt, 'test', 'test', 1)
def tie_vote(prompt):
    data.add_entry(prompt, 'test', 'test', 2)
def both_vote(prompt):
    data.add_entry(prompt, 'test', 'test', 3)
    
    
def build_tab():
    with gr.Tab("Arena (battle)"):
        with gr.Row():
             gr.Markdown(
            "Instructions for Arena Mode:"
            + "\n - Give a prompt to two anonymous, randomly selected video b"
            + "ots\n - Watch both videos and cast a vote for which is better." 
            + " If you can't decide, press “skip” to vote for neither or “tie"
            + "” to vote for both\n - You can keep generating new videos from"
            + " the same prompt or edit an existing prompt for a fresh compar"
            + "ison\n - be sure to check out the leaderboard to view the top "
            + "video bot stats!")
        with gr.Row():
            output1=gr.Video(label="Model A")
            output2=gr.Video(label="Model B")
        with gr.Row():
            abetter_btn = gr.Button("<- A is better")
            bbetter_btn = gr.Button("B is better ->")
            bbetter_btn.click(fn=b_vote, inputs = [], outputs = [])
            tie_btn = gr.Button("Tie")
            tie_btn.click(fn=tie_vote, inputs = [], outputs = [])
            both_btn = gr.Button("Skip")
            both_btn.click(fn=both_vote, inputs = [], outputs = [])
        with gr.Row():
            text = gr.Textbox(label="Enter your prompt and hit ENTER", min_width=1100)
            submit_btn = gr.Button("Submit")
            text.submit(fn=generate, inputs = text, outputs = [output1,output2], scroll_to_output=True)
            submit_btn.click(fn=generate, inputs = text, outputs = [output1,output2], scroll_to_output=True)
        with gr.Row():
            clear_btn = gr.ClearButton([text,output1,output2])
            regenerate_btn = gr.Button("Regenerate")
            regenerate_btn.click(fn=generate, inputs=text, outputs = [output1,output2], scroll_to_output=True)
        with gr.Row():
            gr.Markdown(
            """
            Terms of Service
            """
            )

        abetter_btn.click(fn=a_vote, inputs = [text], outputs = [])
        bbetter_btn.click(fn=b_vote, inputs = [text], outputs = [])
        both_btn.click(fn=both_vote, inputs = [text], outputs = [])
        tie_btn.click(fn=tie_vote, inputs = [text], outputs = [])
