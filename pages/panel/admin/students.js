import Head from "@/components/head";
import Header from "@/components/Panel/admin/header";
import StudentsPanel from "@/components/Panel/admin/studentspanel";
import Footer from "@/components/footer";
const Students = ({ Students }) => {
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="مدیریت دانش آموزان" />
      <Header />
      <StudentsPanel Students={Students} />
      <Footer />
    </div>
  );
};
export async function getServerSideProps() {
  let students = await fetch("http://localhost:8080/api/students", {
    method: "POST",
  });
  let Students = await students.json();
  return {
    props: { Students },
  };
}
export default Students;
