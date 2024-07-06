import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import random

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)


#site url
url = "https://traveldiarieskenya.wordpress.com/2014/10/03/a-look-at-kenya-through-the-years-pictureblog-1914-1990s/comment-page-1/"

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# function to extract header (header content)
def extract_header(soup):
    header_image = soup.find('header', class_="site-header").find('a').find('img')['src']
    title = soup.find('div', class_="site-branding").find('h1', class_='site-title').find('a').text.strip()
    description = soup.find('div', class_='site-branding').find('h2', class_='site-description').text.strip()
    
    return header_image, title, description

def extract_gallery_images(soup):
    images = []
    gallery_items = soup.body.find('div',class_="entry-content").findAll('div', class_='tiled-gallery-item')

    for gallery_item in gallery_items:
        img_title = gallery_item.find('img')['data-image-title']
        img_src = gallery_item.find('img')['src']
        img_alt=gallery_item.find('img')['alt']
        # card_size = random.randint(3,4)
        
        image_data ={
            "img_title":img_title,
            "img_src":img_src,
            "img_alt":img_alt,
          
        }
        images.append(image_data)
    return images


@app.get('/get_header/')
async def get_header():
    header_image, title, description = extract_header(soup)
    header_data = {
        "header_image": header_image,
        "title":title,
        "description":description
    }
    return JSONResponse(content=header_data)

@app.get('/get_images/')
async def get_images():
    images = extract_gallery_images(soup)
    return JSONResponse(content=images)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0", port=8000)