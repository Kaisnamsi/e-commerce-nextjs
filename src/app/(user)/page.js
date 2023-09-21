import Image from "next/image";
import AllProducts from "./components/AllProducts";
import Category from "./components/Category";
import Slider from "./components/Slider";
import { FaMagic, FaTruck } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Slider />
      <Category />
      <AllProducts />
      <section>
        {/* <!-- Big Sale Start Here --> */}
        <div className="row big_sale text-center my-3">
          <span className="fw-bold fs-2 mb-2">
            Big <b className="text-primary">Sale!</b>
          </span>
          <div className="col-sm-6 p-5" style={{ background: "#e7f6ed" }}>
            <Image
              src="https://e-commerce-p.netlify.app/images/big_sale.jpg"
              width={0}
              height={0}
              alt=""
              style={{ height: "100%", width: "100%" }}
              sizes="100vw"
            />
          </div>
          <div
            className="col-sm-6 text-center"
            style={{ padding: "8%", background: "#e7f6ed" }}
          >
            <p className="fs-1 text-primary">50% less in all items</p>
            <span className="text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </span>{" "}
            <br />
            <br />
            <br />
            <a href="#" className="cat-btn btn my-color">
              SHOP NOW
            </a>
          </div>
        </div>
        {/* <!-- end Big Sale --> */}
      </section>

      <section>
        {/* <!-- Services start Here --> */}
        <div className="row my-3 px-5">
          <div className="row">
            <div className="col-sm-12 text-center mb-4">
              <span className="fw-bold fs-2 mb-2">
                Our{" "}
                <b className="text-primary">
                  Services <FaMagic/>
                </b>
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{maxWidth:"450px"}}>
              <div className="row g-0">
                <div className="col-md-4 p-4 text-primary">
                  <FaTruck style={{fontSize: "60px"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <b>Free Shipping</b>
                    <p>
                      For all Order Up To{" "}
                      <i className="fa-solid fa-indian-rupee-sign"></i> 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3"  style={{maxWidth:"450px"}}>
              <div className="row g-0">
                <div className="col-md-4 p-4 text-primary">
                <FaTruck style={{fontSize: "60px"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <b>Free Shipping</b>
                    <p>
                      For all Order Up To{" "}
                      <i className="fa-solid fa-indian-rupee-sign"></i> 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3"  style={{maxWidth:"450px"}}>
              <div className="row g-0">
                <div className="col-md-4 p-4 text-primary">
                <FaTruck style={{fontSize: "60px"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <b>Free Shipping</b>
                    <p>
                      For all Order Up To{" "}
                      <i className="fa-solid fa-indian-rupee-sign"></i> 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
