import { Footer } from "../../../components/index";

interface FooterSectionProps {
  id?: any;
  footerData: any;
}

export const FooterSection = ({ id, footerData }: FooterSectionProps) => {
    
  return (
    <footer className="" id={id}>
      <Footer data={footerData} />
    </footer>
  );
};
