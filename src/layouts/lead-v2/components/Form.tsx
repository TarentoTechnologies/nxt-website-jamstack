import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { PrimaryTitle } from "../../../components";

interface FormProps {
  formTitle: string;
  formDescription: string;
  qrCode?: any;
}
export const Form = ({ formTitle, formDescription, qrCode }: FormProps) => {
  const resImage: any = getImage(qrCode?.localFile);

  return (
    <div className="container-fluid d-flex justify-content-center paddingTopBottom60">
      <div className={`containerService paddingLeftRight15`}>
        <div className="row">
          <div className="col-lg-6">
            <div className={`mt-3`}>
              <PrimaryTitle title={formTitle} variant="infoSectionH2" />
              <p className={`pt-3`} data-aos="fade-up">
                {formDescription}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {resImage && (
              <center className="py-3 py-sm-3 py-md-3 py-lg-0">
                <GatsbyImage
                  image={resImage}
                  alt={resImage ? resImage?.alternativeText : ""}
                  className={`img-fluid`}
                  data-aos="fade-up"
                />
              </center>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
