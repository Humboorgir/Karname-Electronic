import Image from "next/image";

const Image_ = () => {
  if (!student.reports?.length)
    return <Image className=" mr-8" src={`/nodata.svg`} height={200} width={200} alt={student.name} />;

  return (
    <Image src={`/defaultStudent${global.student.image}.svg`} height={200} width={200} alt={student.name} />
  );
};

export default Image_;
