import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated testimonials with more natural modern photos
const testimonials = [
  {
    name: "Vaidehi Chaudhari",
    text: "This platform helped me discover the perfect home. So easy and smooth!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    text: "I loved the intuitive filters and instant inquiries. Found what I needed quickly!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
  },
  {
    name: "Meera Patel",
    text: "Professional service, and the listing details were very accurate.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80",
    rating: 4,
  },
];

// Star rating renderer
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={`full-${i}`} className="text-warning me-1" />);
  if (hasHalf)
    stars.push(<FaStarHalfAlt key="half" className="text-warning me-1" />);
  while (stars.length < 5)
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-warning me-1" />);

  return stars;
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">
        ✨ What Our Clients Say
      </h2>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div
              className="testimonial-card mx-auto p-4 d-flex flex-column align-items-center text-center"
              style={{
                maxWidth: "600px",
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                margin: "0 15px",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mb-4"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "4px solid #0d6efd",
                }}
              />
              <p
                className="lead fst-italic text-secondary mb-4"
                style={{ fontSize: "1.15rem" }}
              >
                “{testimonial.text}”
              </p>
              <div className="mb-3">{renderStars(testimonial.rating)}</div>
              <h5 className="fw-semibold text-primary">{testimonial.name}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
