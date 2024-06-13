import gradio as gr
import numpy as np


def build_tab():
    with gr.Tab("Welcome"):
        title = "welcome"
        gr.Markdown(title, elem_id="title")