import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

type image_type= {
  img_title:string,
img_src:string,
img_alt:string,
card_size:number,
}

export default function ImageCards() {
  const [image_data, set_image_data] = useState<image_type[]>([]);

  const get_images_data = async () => {
    const url = "http://127.0.0.1:8000/get_images/";
    try {
      const response = await axios.get(url);
      console.log(response.data);
      set_image_data(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_images_data();
  }, []);

  return (
    <div className="max-w-[90%] gap-2 grid grid-cols-12 grid-rows-2 px-8 m-auto my-4">
      {image_data.map((image_card:image_type) => (
        <Card
        
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px]"
          key={image_card.img_src}
        >
         
          <Image
            removeWrapper
            alt={image_card.img_alt}
            className="z-0 w-full h-full object-cover"
            src={image_card.img_src}
          />
          {
            image_card.img_title && <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between ">
            <div className="flex flex-col justify-start items-start ">
              <h4 className="text-default-800 font-bold text-large">
                {image_card.img_title}
              </h4>
            </div>
          </CardFooter>
          }
          
        </Card>
      ))}
    </div>
  );
}
