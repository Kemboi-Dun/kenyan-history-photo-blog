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
      console.log(response.data);
      set_header_data(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get_header_data();
  }, []);

  return (
    <div className="flex justify-end align-end gap-2 max-w-[90%] m-auto max-h-[50vh] h-[50vh] relative my-4 ">
      <Image
        width="w-[100%]"
        height="h-[100%]"
        src={header_data.header_image}
        alt={header_data.description}
        className="w-screen h-full "
      />
      <span className="h-full  flex  flex-col justify-end  gap-4 text-end aling-center">
        <h2 className="font-semibold text-2xl">{header_data.title}</h2>
        <p className="text-start">{header_data.description}</p>
      </span>
    </div>
  );
};

export default AppHeader;
