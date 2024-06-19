import gradio as gr
import pymysql
from datetime import datetime

connection = pymysql.connect(host = 'localhost',
                             user = 'root',
                             password = 'Puresug@r',
                             database = 'vote_data',
                             charset = 'utf8mb4',
                             cursorclass = pymysql.cursors.Cursor)

def conn():
    return connection

def add_entry(prompt, model_a, model_b, vote):
    with connection:
        with connection.cursor() as cursor:
            sql = "INSERT INTO `votes` (`time`, `prompt`,  `model_a`,  `model_b`,  `vote`) VALUES (%s, %s, %s, %s, %s)"
            cursor.execute(sql, (datetime.now(), prompt, model_a, model_b, vote))
        connection.commit()
    