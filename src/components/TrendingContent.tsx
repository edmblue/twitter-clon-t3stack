import GoogleIcon from "../../public/images/icons/Google.svg";
import DiscordIcon from "../../public/images/icons/Discord.svg";
import SessionLink from "./SessionLink";

type SignUpLinksType = {
  content: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  type: string;
};

const SignUpLinks: SignUpLinksType[] = [
  {
    content: "Sign up with Google",
    icon: GoogleIcon,
    type: "google",
  },
  {
    content: "Sign up with Discord",
    icon: DiscordIcon,
    type: "discord",
  },
];

const TrendingContent = () => {
  return (
    <div className="mt-3 hidden  lg:block">
      <div className="rounded-xl border p-3">
        <h2 className="text-lg font-bold">Are you new on Twitter?</h2>
        <p className="mt-1 text-[13px] leading-4 text-gray-500">
          Sign up now to get your own personalized timeline
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {SignUpLinks.map((item) => (
            <SessionLink
              key={item.type}
              content={item.content}
              icon={item.icon}
              type={item.type}
            />
          ))}
        </div>
        <div>
          <p className="mt-3 text-[12px] leading-4 text-gray-700">
            By signing up, you agree to the{" "}
            <span className="link-styles text-blue-500">Terms of Service</span>{" "}
            and{" "}
            <span className="link-styles text-blue-500">Privacy Policy</span>,
            including the{" "}
            <span className="link-styles text-blue-500">Cookie Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingContent;
