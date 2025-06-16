import brand from "@/assets/img/elements/elements5.png";
const brandItems = ["SEO marketing", "Website Design", "Motion graphic", "Media Entertainment"];
const repeatedBrandItems = [...brandItems, ...brandItems, ...brandItems, ...brandItems];
const SliderEnd = () => {
  return <div className="slider6-section-area">
      <div className="marquee-wrap">
        <div className="marquee-text">
          {repeatedBrandItems.map((item, index) => <div className="brand-single-box" key={index}>
              <h3>
                {item} <img src={brand} alt={item} />
              </h3>
            </div>)}
        </div>
      </div>
    </div>;
};
export default SliderEnd;