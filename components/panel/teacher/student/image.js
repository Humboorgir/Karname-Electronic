import Image from "next/image";

const Image_ = ({ student }) => {
  if (!student.marks?.length)
    return (
      <Image
        className="col-start-1 col-end-1 mr-8"
        src={`/nodata.svg`}
        height={200}
        width={200}
        alt={student.name}
      />
    );

  return (
    <Image
      className="col-start-1 col-end-1"
      src={`/defaultStudent${student.image}.svg`}
      height={250}
      width={250}
      alt={student.name}
    />
  );
};

export default Image_;
