"use client";
import {
  Users,
  PillIcon as Prescription,
  MapPin,
  ClipboardList,
  ChevronRight,
  Edit2,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import withHeader from "../../hoc/withHeader";

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4 row g-3">
      {/* Left Column */}
      <div className="col-12 col-md-6">
        {/* My Details Card */}
        <Card className="">
          {/* <div className="p-4">
            <h2 className="fs-5 fw-semibold text-muted">My Details</h2>
          </div> */}
          <div className="">
            {[
              {
                icon: User,
                label: "profile",
                href: "/profile",
              },
              { icon: Users, label: "Family Members", href: "/family-members" },

              { icon: MapPin, label: "Address", href: "#" },
              { icon: ClipboardList, label: "My Bookings", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="d-flex align-items-center justify-content-between p-3 text-decoration-none text-dark border-bottom"
              >
                <div className="d-flex align-items-center gap-2">
                  <item.icon className="h5 w5 text-muted" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="h5 w5 text-muted" />
              </Link>
            ))}
          </div>
        </Card>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-6">
        <Card className="p-4">
          <h1 className="fs-3 fw-bold mb-4">My Profile</h1>

          <div className="d-flex flex-column gap-3">
            <div>
              <h3 className="fs-6 fw-medium mb-1">Name</h3>
              <p className="text-muted">Guest</p>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <h3 className="fs-6 fw-medium mb-1">Gender</h3>
                <p className="text-muted">-</p>
              </div>
              <div className="col-6">
                <h3 className="fs-6 fw-medium mb-1">Age</h3>
                <p className="text-muted">-</p>
              </div>
            </div>

            <div>
              <h3 className="fs-6 fw-medium mb-1">Mobile number</h3>
              <p className="text-muted">9716164902</p>
            </div>

            <div>
              <h3 className="fs-6 fw-medium mb-1">Email Id</h3>
              <p className="text-muted">-</p>
            </div>

            <Button className="w-100" variant="outline-primary">
              <Edit2 className="me-2 h5 w5" />
              Edit Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default withHeader(ProfilePage);
