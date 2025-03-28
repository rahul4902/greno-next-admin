"use client";

import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./gallery.css";
import withHeader from "../../hoc/withHeader";
import Image from "next/image";

const MediaGallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/500/300?q=lab&&random=${i + 1}`,
  }));

  return (
    <div className="gallery-container mt-5">
      <Container className="">
        <h1 className="gallery-title">Gallery</h1>

        <Row className="gallery-grid">
          {images.map((img, index) => (
            <Col key={img.id} md={4} className="mb-4 gallery-item">
              <div className="image-wrapper">
                <Image
                  src={img.image}
                  alt={`Gallery item ${img.id}`}
                  width={500} // Set a fixed width
                  height={300} // Set a fixed height
                  className="gallery-image animate__animated"
                />
                <div className="image-overlay">
                  <h3 className="image-title">Photo {img.id}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default withHeader(MediaGallery);
