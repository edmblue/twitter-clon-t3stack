import Link from "next/link";
import MenuItem from "./MenuItem";
import TwitterIcon from "../../../public/images/menu/TwitterIcon.svg";
import HashtagIcon from "../../../public/images/menu/Hashtag.svg";
import HashtagIconBold from "../../../public/images/menu/HashtagBold.svg";
import EngineIcon from "../../../public/images/menu/Engine.svg";
import EngineIconBold from "../../../public/images/menu/EngineBold.svg";

type Menu = {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSelected: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

const offlineMenu: Menu[] = [
  {
    label: "Explore",
    icon: HashtagIcon,
    iconSelected: HashtagIconBold,
    link: "/explore",
  },
  {
    label: "Configuration",
    icon: EngineIcon,
    iconSelected: EngineIconBold,
    link: "/configuration",
  },
];

const SideMenu = () => {
  return (
    <div className=" lg:w-[225px]">
      <Link href="/">
        <div className="mt-3 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
          <TwitterIcon fill="#1DA1F2" />
        </div>
      </Link>
      <nav className="flex flex-col">
        {offlineMenu.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            iconSelected={item.iconSelected}
            link={item.link}
          />
        ))}
      </nav>
    </div>
  );
};

export default SideMenu;
