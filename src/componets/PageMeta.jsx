import fav1 from "../assets/img/logo/fav-logo1.png";
const PageMeta = ({
  title,
  description,
  icon
}) => {
  return <>
      <title>
        {title ?? "Renev - Modern Creative Digital Agency React Js Template"}
      </title>

      {description && <meta property="og:description" content={description} />}

      <link rel="icon" href={icon ?? fav1} type="image/png" />
    </>;
};
export default PageMeta;