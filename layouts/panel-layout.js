import Head from "@/components/head";
import Navbar from "@/components/panel/global/navbar";
import Footer from "@/components/footer";
import ChangePassModal from "@/components/panel/global/changepassmodal";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const panelLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

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

  const positions = {
    admin: "نماینده",
    teacher: "دبیر",
    student: "دانش آموز",
  };
  const position = positions[panelType];

  if (status === "loading")
    return (
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue
        flex items-center gap-3 text-xl">
        <span className="loading loading-lg loading-spinner mb-1.5" /> Loading
      </div>
    );

  if (status === "unauthenticated" || session.user.position != position)
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        ACCESSS DENIED
      </div>
    );

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
