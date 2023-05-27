import Head from "next/head";
import SideMenu from "../components/menu/SideMenu";
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
      <div className="mx-auto flex md:justify-center lg:w-10/12">
        <SideMenu />
        <main className="mx-auto flex w-[990px] gap-8">
          {children}
          <TrendingContent />
        </main>
      </div>
    </>
  );
};

export default Layout;
