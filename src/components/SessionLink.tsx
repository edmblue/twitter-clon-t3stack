type SessionLinkProps = {
  content: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  type: string;
};

const SessionLink = ({ content, icon: Icon, type }: SessionLinkProps) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border py-[7px] hover:bg-gray-200">
      <div>
        <Icon />
      </div>
      <p className="text-sm font-semibold">{content}</p>
    </button>
  );
};

export default SessionLink;
