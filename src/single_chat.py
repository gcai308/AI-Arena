import gradio as gr
import numpy as np


def build_tab():
    with gr.Tab("Single chat"):
        title = "single chat"
        gr.Markdown(title, elem_id="title")