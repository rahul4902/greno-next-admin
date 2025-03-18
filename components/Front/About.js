import { CheckCircle, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          {/* Company Story */}
          <div className="row align-items-center mb-5 g-5">
            <div className="col-md-6 mt-0">
              <h3 className="fw-bold mb-4">About Us</h3>
              <p className="text-muted mt-3">
                Greno Labs is at the forefront of scientific research and
                technological innovation. From developing new materials to
                advancing healthcare, we are committed to solving real-world
                problems through cutting-edge science.
              </p>

              <p className="text-muted mt-3">
                Our interdisciplinary teams work across fields like
                biotechnology, environmental science, and artificial
                intelligence to create sustainable, impactful solutions.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
            <div className="col-md-6 mt-5">
              <div
                className="position-relative rounded overflow-hidden"
                style={{ height: "400px" }}
              >
                <Image
                  src="/images/gallery/about_us.jpg"
                  alt="Our office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
