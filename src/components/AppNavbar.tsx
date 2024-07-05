import {
  Navbar,
  Image,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const AppNavbar = () => {
  return (
    <div>
      <Navbar className="w-[90%] bg-default-200 flex align-center m-auto my-2 rounded-md py-1">
        <NavbarBrand>
          <Image
          width={100}
            src="https://assets.foleon.com/eu-west-2/uploads-7e3kk3/47954/5003696b_ktb_board_magical_kenya_logo_rgb-fa-06-_black.553005c01fb5.png"
            alt="Magical-kenya-logo"
          />
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link
              isExternal
              showAnchorIcon
              href="https://traveldiarieskenya.wordpress.com/2014/10/03/a-look-at-kenya-through-the-years-pictureblog-1914-1990s/comment-page-1/"
            >
              Source page
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
