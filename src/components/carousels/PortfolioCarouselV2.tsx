const slideData = [
  {
    id: 0,
    imgSrc: "https://picsum.photos/824/457?random=1",
    alt: "Test image 1",
  },
  {
    id: 1,
    imgSrc: "https://picsum.photos/824/457?random=2",
    alt: "Test image 2",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/824/457?random=3",
    alt: "Test image 3",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/824/457?random=4",
    alt: "Test image 4",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/824/457?random=5",
    alt: "Test image 5",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/824/457?random=6",
    alt: "Test image 6",
  },
];

export const PortfolioCarouselV2 = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide pe-0 me-0"
      style={{ border: "1px solid red" }}
    >
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators">
        {slideData.map((data: any, index: number) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {slideData.map((data: any, index: number) => {
          return (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex flex-row">
                <img
                  src={data.imgSrc}
                  className="d-block w-100"
                  alt={data.alt}
                />
                <img
                  src={`${
                    index < slideData.length - 1
                      ? slideData[index + 1]?.imgSrc
                      : slideData[0]?.imgSrc
                  }`}
                  className="d-block w-100 ms-4"
                  alt={
                    index < slideData.length - 1
                      ? slideData[index + 1]?.alt
                      : slideData[0]?.alt
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
