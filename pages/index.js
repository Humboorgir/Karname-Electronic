import Head from "@/components/head";
import Error from "@/components/home/error";
import Form from "@/components/home/form";

import { useState } from "react";
const Admin = () => {
  const [error, setError] = useState({
    display: false,
    title: null,
    text: null,
  });
  return (
    <div className="flex items-center justify-center min-h-[100svh] min-w-[100vw]">
      <Head page="ورود" />
      {error.display && <Error error={error} setError={setError} />}
      <Form setError={setError} />
    </div>
  );
};

export default Admin;
