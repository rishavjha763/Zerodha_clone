import React from "react";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(245, 251, 255)" }}
    >
      <div className="container  mt-5 ">
        <div className="row mt-5 ">
          <div className="col footer-copy  ">
            <img
              src="Media/logo.svg"
              style={{ width: "50%", marginBottom: "1rem" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className=" footer-icon">
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="">
                {" "}
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                {" "}
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col  footer">
            <p>Company</p>
            <a className="text-muted" href="">
              About
            </a>
            <br />
            <a className="text-muted" href="">
              Products
            </a>
            <br />
            <a className="text-muted" href="">
              Pricing
            </a>
            <br />
            <a className="text-muted" href="">
              Referral programme
            </a>
            <br />
            <a className="text-muted" href="">
              Careers
            </a>
            <br />
            <a className="text-muted" href="">
              Zerodha.tech
            </a>
            <br />
            <a className="text-muted" href="">
              Press & media
            </a>
            <br />
            <a className="text-muted" href="">
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col   footer">
            <p>Support</p>
            <a className="text-muted" href="">
              Contact
            </a>
            <br />
            <a className="text-muted" href="">
              Support portal
            </a>
            <br />
            <a className="text-muted" href="">
              Z-Connect blog
            </a>
            <br />
            <a className="text-muted" href="">
              List of charges
            </a>
            <br />
            <a className="text-muted" href="">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col  footer">
            <p>Account</p>
            <a className="text-muted" href="">
              Open an account
            </a>
            <br />
            <a className="text-muted" href="">
              Fund transfer
            </a>
            <br />
            <a className="text-muted" href="">
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted " style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
