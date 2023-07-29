import Head from "@/components/head";

import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  return (
    <>
      <Head page="ارسال نمرات" />
      <div>student id: {router.query.studentId}</div>
    </>
  );
};

export default Student;
