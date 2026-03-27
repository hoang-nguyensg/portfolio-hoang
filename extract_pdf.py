import gdown
import PyPDF2
import sys

file_id = '1FemxVNY4iL7vud2zyeOewTpqYmlfiPK0'
url = f'https://drive.google.com/uc?id={file_id}'
output = 'thesis.pdf'

try:
    gdown.download(url, output, quiet=False)
    
    with open(output, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for i in range(len(reader.pages)):
            text += reader.pages[i].extract_text() + "\n"
            
    with open('thesis_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully extracted text to thesis_text.txt")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
