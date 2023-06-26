import Head from "@/components/head";
import Navbar from "@/components/panel/admin/navbar";
import ManagersPanel from "@/components/panel/admin/managers/managerspanel";
import Footer from "@/components/footer";
const Managers = ({ Managers }) => {
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="مدیریت نمایندگان " />
      <Navbar />
      <ManagersPanel Managers={Managers} />
      <Footer />
    </div>
  );
};
export async function getServerSideProps() {
  let managers = await fetch(`${process.env.NEXTAUTH_URL}/api/managers`, {
    method: "GET",
  });
  let Managers = await managers.json();
  return {
    props: { Managers },
  };
}
export default Managers;
