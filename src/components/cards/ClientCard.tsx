import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { bgWhite } from "../../styles/style-guide/ColorGuide.module.css";
import { clientCard } from "./ClientCard.module.css";

interface ClientCardProps {
  id?: any;
  image: any;
  imageAlt?: string;
}

export const ClientCard = ({ id, image, imageAlt }: ClientCardProps) => {
  const resImage: any = getImage(image);

  return (
    <div className={`${bgWhite} card border border-0 p-5 ${clientCard}`} key={id}>
      <div className="d-flex align-items-center h-100 justify-content-center">
        <GatsbyImage
          image={resImage}
          alt={imageAlt ? imageAlt : ""}
          className={`img-fluid`}
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};
