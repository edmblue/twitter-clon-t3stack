import MenuItem from "./MenuItem";
import TwitterIcon from "../../public/images/menu/TwitterIcon.svg";
import HashtagIcon from "../../public/images/menu/Hashtag.svg";
import EngineIcon from "../../public/images/menu/Engine.svg";

type Menu = {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const offlineMenu: Menu[] = [
  {
    label: "Explore",
    icon: HashtagIcon,
  },
  {
    label: "Configuration",
    icon: EngineIcon,
  },
];

const SideMenu = () => {
  return (
    <div className="w-[275px]">
      <div className="mt-3 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
        <TwitterIcon fill="#1DA1F2" />
      </div>
      <nav className="flex flex-col">
        {offlineMenu.map((item) => (
          <MenuItem key={item.label} label={item.label} icon={item.icon} />
        ))}
      </nav>
    </div>
  );
};

export default SideMenu;
