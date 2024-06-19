import gradio as gr
import data

def load_data():
    return data.vote_data()   
def build_tab():
    ltab = gr.Tab("Leaderboards")
    with ltab:
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
              "str",
              "str",
              "str",
              "str",
              "number"
            ],
            value = load_data,
            height=700,
            column_widths=[50,200,250,150,150,100],
            wrap=True,
        )
       
        ltab.select(load_data, outputs=df)
