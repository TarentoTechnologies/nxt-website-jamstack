import {
  infoSectionH2,
  h1One,
  cardHeader,
  footerHeading,
  tagLabel,
  heading700,
  subText2,
  cta1
} from "./Typography.module.css";

export const Typography = (): any => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sample Text</th>
            <th scope="col">ClassName</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className={infoSectionH2}>
              Tellus in hac habitasse platea
            </th>
            <td>infoSectionH2</td>
          </tr>
          <tr>
            <th scope="row" className={h1One}>
              Tellus in hac habitasse platea
            </th>
            <td>h1One</td>
          </tr>
          <tr>
            <th scope="row" className={cardHeader}>
              Tellus in hac habitasse platea
            </th>
            <td>cardHeader</td>
          </tr>
          <tr>
            <th scope="row" className={footerHeading}>
              Tellus in hac habitasse platea
            </th>
            <td>footerHeading</td>
          </tr>
          <tr>
            <th scope="row" className={tagLabel}>
              Tellus in hac habitasse platea
            </th>
            <td>tagLabel</td>
          </tr>
          <tr>
            <th scope="row" className={heading700}>
              Tellus in hac habitasse platea
            </th>
            <td>heading700</td>
          </tr>
          <tr>
            <th scope="row" className={subText2}>
              Tellus in hac habitasse platea
            </th>
            <td>subText2</td>
          </tr>
          <tr>
            <th scope="row" className={cta1}>
              Tellus in hac habitasse platea
            </th>
            <td>cta1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
