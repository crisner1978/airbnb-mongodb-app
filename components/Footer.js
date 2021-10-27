import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10  px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold">Host</h5>
        <p>Chris Risner</p>
        <p>Presents</p>
        <p>Next Airbnb</p>
        <p>To a Screen Near You</p>
        <p>More to Come</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Security Policies</p>
        <p>Regulations</p>
        <p>Procedures</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold">Community</h5>

        <p>Murfreesboro</p>
        <p>Halloween</p>
        <p>In the Reserve</p>
        <p>Trick or Treat</p>
        <p>BOO BOO BOO</p>
      </div>
    </div>
  );
};

export default Footer;
