import gradio as gr
import numpy as np


def build_tab():
    with gr.Tab("Arena (battle)"):
        title = "Arena (battle)"
        gr.Markdown(title, elem_id="title")