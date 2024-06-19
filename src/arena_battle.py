import gradio as gr
import data

current = ''
abetter = 0
bbetter = 1
tie = 2
both = 3

def generate(prompt):
    current = prompt
    return "Clutch.mp4","Whiff.mp4" #Use other mp4s

def vote(vote):
    data.add_entry(current, 'test', 'test', vote)
    
def build_tab():
    with gr.Tab("Arena (battle)"):
        with gr.Row():
            gr.Markdown(
            """
            # Videobot Arena
            Start typing below to compare models
            """)
        with gr.Row():
            output1=gr.Video(label="Model A")
            output2=gr.Video(label="Model B")
        with gr.Row():
            abetter_btn = gr.Button("<- A is better")
            abetter_btn.click(fn=vote, inputs = abetter, outputs = [])
            bbetter_btn = gr.Button("B is better ->")
            bbetter_btn.click(fn=vote, inputs = bbetter, outputs = [])
            tie_btn = gr.Button("Tie")
            tie_btn.click(fn=vote, inputs = tie, outputs = [])
            both_btn = gr.Button("Skip")
            both_btn.click(fn=vote, inputs = both, outputs = [])
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
