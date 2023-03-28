import Head from "@/components/head";
import Header from "@/components/Panel/admin/header";
import ManagersPanel from "@/components/Panel/admin/managers/managerspanel";
import Footer from "@/components/footer";
const Managers = ({ Managers }) => {
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="مدیریت نمایندگان " />
      <Header />
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
