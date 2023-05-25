type MenuItemProp = {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const MenuItem = ({ label, icon: Icon }: MenuItemProp) => {
  return (
    <div className="mt-1">
      <a className="inline-flex w-auto cursor-pointer items-center gap-4 rounded-full px-4 py-3 hover:bg-gray-200 ">
        <Icon />
        <div>{label}</div>
      </a>
    </div>
  );
};

export default MenuItem;
