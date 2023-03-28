import Head from "@/components/head";
import Header from "@/components/Panel/admin/header";
import TeachersPanel from "@/components/Panel/admin/teachers/teacherspanel";
import Footer from "@/components/footer";
const Teachers = ({ Teachers }) => {
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="مدیریت دبیران" />
      <Header />
      <TeachersPanel Teachers={Teachers} />
      <Footer />
    </div>
  );
};
export async function getServerSideProps() {
  let teachers = await fetch(`${process.env.NEXTAUTH_URL}/api/teachers`, {
    method: "GET",
  });
  let Teachers = await teachers.json();
  return {
    props: { Teachers },
  };
}
export default Teachers;
