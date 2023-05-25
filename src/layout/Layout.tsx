import Head from "next/head";
import SideMenu from "../components/SideMenu";
import TrendingContent from "../components/TrendingContent";

type LayoutProp = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const Layout = ({ children, title = "", description = "" }: LayoutProp) => {
  const fullTitle = `${title} / Twitter`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="mt-2 flex justify-center">
        <SideMenu />
        {children}
        <TrendingContent />
      </div>
    </>
  );
};

export default Layout;
