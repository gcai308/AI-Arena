import gradio as gr

def build_tab():
    with gr.Tab("About Us"):
        gr.Markdown("About Us:\nVideobot Arena is a free service allowing user"
                    + "s to access, compare, and rank an assortment of text-to"
                    + "-video AI models. Voting provides valuable data for bot"
                    + "h consumers selecting models and companies looking to i"
                    + "mprove their products.")