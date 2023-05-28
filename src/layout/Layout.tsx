import Head from "next/head";
import SideMenu from "../components/menu/SideMenu";
import TrendingContent from "../components/TrendingContent";
import Modal from "~/components/modal/Modal";

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
      <Modal />
      <div className="relative mx-auto flex md:w-10/12 md:justify-center">
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
