import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

export type image_type = {
  img_title: string;
  img_src: string;
  img_alt: string;
  // card_size: number;
};

export default function ImageCards() {
  const [image_data, set_image_data] = useState<image_type[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image_info, set_image_info] = useState<image_type>({
    img_title: "",
    img_src: "",
    img_alt: "",
    // card_size: 0,
  });

  const get_images_data = async () => {
    const url = "http://127.0.0.1:8000/get_images/";
    try {
      const response = await axios.get(url);

      set_image_data(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const classnames = [
    "col-span-12 sm:col-span-12 md:col-span-5 h-[300px] cursor-pointer",
    "col-span-12 md:col-span-7 sm:col-span-12 h-[300px] cursor-pointer",
    "col-span-12 md:col-span-4 sm:col-span-12 h-[300px] cursor-pointer",
  ];

  useEffect(() => {
    get_images_data();
  }, []);

  return (
    
    <div className="max-w-[90%] gap-4 grid grid-cols-12 grid-rows-2 px-8 m-auto my-4">
      {image_data.map((image_card: image_type, index) => {
        const className = classnames[index % classnames.length];
        return (
          <Card
            isFooterBlurred
            className={className}
            key={image_card.img_src}
            radius="sm"
            shadow="md"
          >
            <Image
              removeWrapper
              alt={image_card.img_alt}
              className="z-0 w-full h-full object-cover"
              src={image_card.img_src}
              onClick={() => {
                set_image_info(image_card);
                onOpen();
              }}
            />
            {image_card.img_title && (
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between ">
                <div className="flex flex-col justify-start items-start ">
                  <h4 className="text-default-800 font-bold md:font-medium lg:text-large text-sm">
                    {image_card.img_title}
                  </h4>
                </div>
              </CardFooter>
            )}
          </Card>
        );
      })}

      <ImageModal image_info={image_info} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
