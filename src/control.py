import gradio as gr
import numpy as np
import welcome
import about_page
import arena_battle
import arena_sbs
import leaderboard
import single_chat


with gr.Blocks() as demo:
    welcome.build_tab()
    about_page.build_tab()
    arena_battle.build_tab()
    arena_sbs.build_tab()
    leaderboard.build_tab()
    single_chat.build_tab()
    
demo.launch()