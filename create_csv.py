"""
This module creates a csv file for Anki import
"""
LEVELS = [
    {"char": 'l', "nums": 64, "tag": "leicht"},
    {"char": 'm', "nums": 86, "tag": "mittel"},
    {"char": 's', "nums": 84, "tag": "schwer"}
]
URL = "http://game.finckh.net/situat/alle.htm"
FILE_NAME = "finckh.csv"


def create_link(level_char, number):
    """
    Create the link to the question

    :param level_char: the char of the level
    :param number: the number of the question
    :return: the created url
    """
    return URL + "#" + level_char + str(number).zfill(2)


CSV_FILE = open(FILE_NAME, 'w')
CSV_FILE.write("tags: regeln\n")
CSV_FILE.write("Link;Tag")
for level in LEVELS:
    for i in range(1, level["nums"] + 1):
        CSV_FILE.write("\n")
        CSV_FILE.write(create_link(level["char"], i))
        CSV_FILE.write(";")
        CSV_FILE.write(level["tag"])
CSV_FILE.close()
