import { useRouter } from "next/router";
import Link from "next/link";
import EngineIcon from "../../public/images/menu/Engine.svg";
import Layout from "~/layout/Layout";

const Explore = () => {
  const router = useRouter();
  const title = router.pathname === "/explore" ? "Explore" : "Home";
  return (
    <Layout title={title} description="Explore the lastest content">
      <div className="min-h-screen w-full max-w-[660px] border border-t-0">
        <header className="flex w-full cursor-pointer items-center justify-between p-3">
          <h1 className="text-lg font-bold">Explore</h1>
          <Link
            href="#"
            className="flex h-8 w-8
             items-center justify-center rounded-full hover:bg-gray-200"
          >
            <EngineIcon />
          </Link>
        </header>
      </div>
    </Layout>
  );
};

export default Explore;
