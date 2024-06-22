
import gradio as gr
import about
import arena_battle
import leaderboard
import single

with gr.Blocks(title = "Videobot Arena") as demo:
    arena_battle.build_tab()
    single.build_tab()
    leaderboard.build_tab()
    about.build_tab()


demo.launch(server_name="0.0.0.0")
