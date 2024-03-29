const Footer = ({ className }) => {
  return (
    <footer
      className={
        "flex flex-row justify-center items-center py-8 border-t-[3px] text-center w-full " + className
      }>
      <span>Copyright &copy; 2023 Karname Electronic, All rights reserved.</span>
    </footer>
  );
};

export default Footer;
