import Head from "@/components/head";
import Header from "@/components/login/admin/header";
import Error from "@/components/login/admin/error";
import Form from "@/components/login/admin/form";
import Footer from "@/components/footer";

import { useEffect, useState } from "react";
const Admin = () => {
  const [error, setError] = useState({
    display: false,
    title: null,
    text: null,
  });
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="ورود نماینده" />
      <Header />
      {error.display && <Error error={error} setError={setError} />}
      <Form setError={setError} />
      <Footer />
    </div>
  );
};

export default Admin;
