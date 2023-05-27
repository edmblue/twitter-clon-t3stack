import Link from "next/link";
import { useRouter } from "next/router";

type MenuItemProp = {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSelected: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

const MenuItem = ({
  label,
  icon: Icon,
  link,
  iconSelected: IconSelected,
}: MenuItemProp) => {
  const router = useRouter();
  const selected = router.pathname === link;
  return (
    <div className="mx-auto lg:mx-0 lg:mt-1">
      <Link
        href={link}
        className="mt-3 flex h-8 w-8 cursor-pointer items-center justify-center gap-4 rounded-full py-2 hover:bg-gray-200 lg:mt-0 lg:inline-flex lg:h-auto lg:w-auto lg:px-4 "
      >
        {selected ? <IconSelected /> : <Icon />}
        <div
          className={`hidden lg:inline-block ${selected ? "font-bold" : ""}`}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
