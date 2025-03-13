import React from 'react';

const index = () => {
  const categoryItems = [
    { image: 'img/product-2.jpg', alt: 'Gardening Kit', label: 'Gardening Kit Combo' },
    { image: 'img/category2.jpg', alt: 'Flower Plants', label: 'Flower Plants' },
    { image: 'img/categry3.jpg', alt: 'Indoor Plants', label: 'Indoor Plants' },
    { image: 'img/category4.webp', alt: 'Croton Plants', label: 'Croton Plants' },
    { image: 'img/category5.jpg', alt: 'Pot Plants', label: 'Pot Plants Online' },
    { image: 'img/category6.jpg', alt: 'Creeper Plants', label: 'Hanging Creeper Plants' },
    { image: 'img/category7.jpg', alt: 'Fruit Plants', label: 'Fruit Plants' },
    { image: 'img/product-4.jpg', alt: 'Herbal Plants', label: 'Fertilizer and Seeds' },
  ];

  // Divide the items into groups of 5 for the carousel slides
  const groupedItems = [];
  for (let i = 0; i < categoryItems.length; i += 5) {
    groupedItems.push(categoryItems.slice(i, i + 5));
  }

  return (
    <div
      id="categoryCarousel"
      className="carousel slide category-section bg-light py-3 parallax-mirror"
      data-bs-ride="carousel"
    >
      <div className="container-fluid">
        <div className="carousel-inner">
          {groupedItems.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="d-flex justify-content-around">
                {group.map((item, itemIndex) => (
                  <div className="category-item text-center" key={itemIndex}>
                    <a href={item.image}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="d-block"
                        style={{ width: 150, height: 'auto' }}
                      />
                    </a>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default index;
