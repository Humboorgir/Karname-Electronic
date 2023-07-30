import Image from "next/image";

const StudentPicture = ({ student }) => {
  return (
    <Image
      className="col-start-1 col-end-1"
      src={`/defaultStudent${student.image}.svg`}
      height={140}
      width={140}
      alt={student.name}
    />
  );
};

export default StudentPicture;
