import gradio as gr
import pymysql
from datetime import datetime


def add_entry(prompt, model_a, model_b, vote):
    connection = pymysql.connect(host = 'localhost',
                                 user = 'root',
                                 password = 'Puresug@r',
                                 database = 'vote_data',
                                 charset = 'utf8mb4',
                                 cursorclass = pymysql.cursors.Cursor)

    with connection:
        with connection.cursor() as cursor:
            sql = "INSERT INTO `votes` (`time`, `prompt`,  `model_a`,  `model_b`,  `vote`) VALUES (%s, %s, %s, %s, %s)"
            cursor.execute(sql, (datetime.now(), prompt, model_a, model_b, vote))
        connection.commit()


def vote_data():
    connection = pymysql.connect(host = 'localhost',
                                 user = 'root',
                                 password = 'Puresug@r',
                                 database = 'vote_data',
                                 charset = 'utf8mb4',
                                 cursorclass = pymysql.cursors.Cursor)
    with connection.cursor() as cursor:
        sql = "SELECT COUNT(*) FROM `votes`"
        cursor.execute(sql)
        tlen = cursor.fetchone()
        votelist = []
        sql = "SELECT * FROM `votes`"
        cursor.execute(sql)
        for i in range(tlen[0]):
            result = list(cursor.fetchone())
            result[1] = result[1].strftime("%m/%d/%Y, %H:%M:%S")
            votelist.append(result)
        return votelist
    
