import Head from "@/components/head";
import Navbar from "@/components/panel/global/navbar";
import Footer from "@/components/footer";
import ChangePassModal from "@/components/panel/global/changepassmodal";

import { useRouter } from "next/router";

const panelLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const titles = {
    admin: "درگاه مدیریت",
    teacher: "درگاه دبیران",
    student: "درگاه دانش آموزان",
  };

  const pathSegments = pathname.split("/");
  const panelIndex = pathSegments.indexOf("panel");
  const panelType = pathSegments[panelIndex + 1];
  const title = titles[panelType];
  return (
    <div className="flex flex-col min-h-[100svh] justify-between">
      <Head page={title} />
      <Navbar />

      {children}
      <Footer />

      <ChangePassModal />
    </div>
  );
};

export default panelLayout;
