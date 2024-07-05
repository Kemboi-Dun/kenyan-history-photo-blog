import { Link } from "@nextui-org/react";

const AppFooter = () => {
  const app_date = new Date();
  const app_year = app_date.getFullYear();

  return (
    <div className="w-full m-auto text-center flex align-center justify-center">
      <Link isExternal showAnchorIcon className="cursor-pointer">source content.</Link>
      <p>All rights reserved. ©{app_year}</p>
    </div>
  );
};

export default AppFooter;
