
import gradio as gr


def generate(prompt):
        return "Clutch.mp4","Whiff.mp4" #Use other mp4s
def sologenerate(prompt):
        return "Clutch.mp4"
def change(model):
    sololabel=model
    return
with gr.Blocks(title = "Videobot Arena") as demo:
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
            bbetter_btn = gr.Button("B is better ->")
            tie_btn = gr.Button("Tie")
            both_btn = gr.Button("Skip")
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
    with gr.Tab("Single Model"):
        with gr.Row():
            gr.Markdown(
            """
            # Single Model
            Choose any model to create a video with

            """)
        with gr.Row():
            dropdown=gr.Dropdown(choices=["Vyond","Collossyan","Runway","Deepbrain","Synthesia","Fliki","Pictory","InVideo","Descript","Peech"],value="Vyond",label="Model",info="Choose which model you want to generate a video with below",interactive=True)
            dropdown.input(fn=change,inputs=dropdown)
        with gr.Row():
            solooutput=gr.Video()
        with gr.Row():
            solotext = gr.Textbox(label="Enter your prompt and hit ENTER", min_width=1100)
            solosubmit_btn = gr.Button("Submit")
            solotext.submit(fn=sologenerate, inputs = solotext, outputs = solooutput, scroll_to_output=True)
            solosubmit_btn.click(fn=sologenerate, inputs = solotext, outputs = solooutput, scroll_to_output=True)
        with gr.Row():
            soloclear_btn = gr.ClearButton(solotext,solooutput)
            soloregenerate_btn = gr.Button("Regenerate")
            soloregenerate_btn.click(fn=sologenerate, inputs=solotext, outputs = solooutput, scroll_to_output=True)
    with gr.Tab("Leaderboards"):
        gr.Markdown("# Videobot Arena Leaderboard")
    with gr.Tab("About Us"):
        gr.Markdown("# About Us")


demo.launch(share=True)
