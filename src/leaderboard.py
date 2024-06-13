import gradio as gr
import numpy as np


def build_tab():
    with gr.Tab("Leaderboard"):
        title = "leaderboard"
        gr.Markdown(title, elem_id="title")
        
    