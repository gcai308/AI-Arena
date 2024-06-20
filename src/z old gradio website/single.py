import gradio as gr


def sologenerate(prompt):
        return "Clutch.mp4"
def change(model):
    sololabel = model
    return

def build_tab():
    with gr.Tab("Single Model"):
        with gr.Row():
            gr.Markdown(
            "Instructions for Single Bot Mode:\n\nThis mode lets you freely a"
            + "ccess a selection of video bots all in one place.\n\nSimply se"
            + "lect your model from the drop-down menu, enter a prompt of you"
            + "r choice, and press Enter")
        with gr.Row():
            dropdown = gr.Dropdown(choices=["Vyond", 
                                            "Collossyan", 
                                            "Runway", 
                                            "Deepbrain", 
                                            "Synthesia", 
                                            "Fliki", 
                                            "Pictory", 
                                            "InVideo", 
                                            "Descript", 
                                            "Peech"],
                                   value = "Vyond", 
                                   label = "Model", 
                                   info = "Choose which model you want to generate a video with below", 
                                   interactive = True)
            dropdown.input(fn = change,inputs=dropdown)
        with gr.Row():
            solooutput = gr.Video()
        with gr.Row():
            solotext = gr.Textbox(label="Enter your prompt and hit ENTER", min_width=1100)
            solosubmit_btn = gr.Button("Submit")
            solotext.submit(fn = sologenerate, inputs = solotext, outputs = solooutput, scroll_to_output = True)
            solosubmit_btn.click(fn = sologenerate, inputs = solotext, outputs = solooutput, scroll_to_output = True)
        with gr.Row():
            soloclear_btn = gr.ClearButton(solotext,solooutput)
            soloregenerate_btn = gr.Button("Regenerate")
            soloregenerate_btn.click(fn = sologenerate, inputs=solotext, outputs = solooutput, scroll_to_output = True)