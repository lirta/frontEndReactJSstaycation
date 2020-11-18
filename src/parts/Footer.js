import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We Kaboom your beauty holyday instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beinners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Accoun
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/propertis">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-paymen">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Trems & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/mailto:indalirta@gmail.com">
                  indalirta@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/tel:+6281277967050">
                  +62812 7796 7050
                </Button>
              </li>
              <li className="list-group-item">
                <span> Staycation, Lintau, Sumatra Barat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            copyright 2020 . All rights reserved . Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
