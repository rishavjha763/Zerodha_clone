import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" >Track Tickets</a>
        
      </div>
      <div className="row p-5 m-5">
        <div className="col-6 support  ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div class="mb-3  " style={{width:"70%"}}>
            <form action="">
              <input
                type="input"
                id="exampleFormControlInput1"
                placeholder="Eg. how do I activate F&O"
              />
            </form>
          </div>

          <br />
          <a  href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6  ps-5  ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
