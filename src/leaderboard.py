import gradio as gr
import data

def build_tab():
    with gr.Tab("Leaderboards"):
        gr.Markdown("# Videobot Arena Leaderboard")
        df = gr.Dataframe(
            headers=[
                "Num",
                "Time",
                "Prompt",
                "Model A",
                "Model B",
                "Vote",
            ],
            datatype=[
                "number",
                "date",
                "str",
                "str",
                "str",
                "number"
            ],
            height=700,
            column_widths=[50,200,250,150,150,100],   
            wrap=True,
        )
    data.vote_data()
        