import { HashLink as Link } from "react-router-hash-link";
//import QuestionForm from "../QuestionForm/QuestionForm";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";
import logo from "../../assets/icons/mountainIcon.png";

function Footer() {
  //refs are used for the motion of the nav bar, it signals when the the div is in
  //view and then then navbar is brought on screen
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-green-800 text-white">
      <div className="lg:grid grid-cols-3 px-16 pt-8" ref={ref}>
        <div className="md:order-2 flex flex-col pb-4 align-middle justify-center text-center">
          <img
            src={logo}
            className="sm:w-[6rem] md:w-[8rem] mx-auto"
            alt="small town"
          />
        </div>

        <div className=" flex flex-col py-2 justify-middle items-center md:order-3 ">
          <div
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s`,
              width: "8rem",
            }}
          >
            <Link
              smooth
              to={`https://form.jotform.com/231375084434051`}
              target="_blank"
            >
              <h4 className="text-white p-2 text-lg text-middle border-l-2 hover:border-x-2">
                Petition
              </h4>
            </Link>
          </div>

          {/* <div
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s`,
              width: "8rem",
            }}
          >
            <Link smooth to="#action">
              <h4 className="text-white p-2 text-lg text-middle border-l-2 hover:border-x-2">
                Action
              </h4>
            </Link>
          </div> */}

          <div
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s`,
              width: "8rem",
            }}
          >
            <Link smooth to="https://saverecordridge.blogspot.com">
              <h4 className="text-white p-2 text-lg text-middle border-l-2 hover:border-x-2">
                Blog
              </h4>
            </Link>
          </div>
        </div>

        <div className="pb-6 md:order-1 flex flex-col justify-around text-center">
          <h5>
            Contact 📧{" "}
            <a
              className="text-white border-bottom"
              href="mailto:SaveRecordRidge@gmail.com"
            >
              Email
            </a>
          </h5>
          {/* <QuestionForm /> */}
        </div>
      </div>
      <p className="text-white mx-auto pb-4 text-center">
        ©️ Save Record Ridge 2023
      </p>
    </section>
  );
}

export default Footer;
