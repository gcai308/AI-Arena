import gradio as gr
import numpy as np


def build_tab():
    with gr.Tab("Arena (SBS)"):
        title = "Side by side arena"
        gr.Markdown(title, elem_id="title")