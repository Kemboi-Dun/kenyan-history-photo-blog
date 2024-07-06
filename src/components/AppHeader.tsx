import { Image } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
type header_type = {
  header_image: string;
  title: string;
  description: string;
};
const AppHeader = () => {
  const [header_data, set_header_data] = useState<header_type>({
    header_image: "",
    title: "",
    description: "",
  });

  const get_header_data = async () => {
    const url = "http://127.0.0.1:8000/get_header/";
    try {
      const response = await axios.get(url);

      set_header_data(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get_header_data();
  }, []);

  return (
    <header className="flex justify-end align-end gap-2 max-w-[90%] m-auto max-h-[70vh]  h-auto relative my-6 lg:flex-nowrap flex-wrap flex-col-reverse lg:flex-row">
      <span className="lg:max-w-[40%] flex flex-col align-start justify-end w-full gap-2">
        <h2 className="font-semibold text-2xl">{header_data.title}</h2>
        <p className="text-start text-sm lg:text-lg">
          {header_data.description}
        </p>
      </span>
      <Image
        width={700}
        height={800}
        src={header_data.header_image}
        alt={header_data.description}
        // className=" col-span-12 sm:col-span-5 "
        radius="sm"
      />
    </header>
  );
};

export default AppHeader;
