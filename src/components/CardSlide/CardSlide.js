import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

function CardSlide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="p-2 my-2 bg-red-700 md:p-8 md:my-4 lg:p-12 rounded-md "
    >
      <div
        className="card"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="px-2 md:px-12 py-8">
          <li className="pb-2">
            Chief Inspector of Mines, Ministry of Energy and Mines and Low
            Carbon -{" "}
            <a href="mailto:mmd-cranbrook@gov.bc.ca">mmd-cranbrook@gov.bc.ca</a>
            <br></br>
            Mailing address: 202-100 Cranbrook Street North, Cranbrook, B.C. V1C
            3P9
          </li>
          <li className="pb-2">
            Honourable Josie Osborne, Ministry of Energy, Mines, and Low Carbon
            Innovation -{" "}
            <a href="mailto:EMLI.minister@gov.bc.ca">EMLI.minister@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            Kathie Wagar, Regional Director for SE Mines Office{" "}
            <a href="mailto:kathie.wagar@gov.bc.ca">kathie.wagar@gov.bc.ca</a>
          </li>
          {/* <li className="pb-2">
            Southeast Mines Office -{" "}
            <a href="mailto:MMD-Cranbrook@gov.bc.ca">MMD-Cranbrook@gov.bc.ca</a>
          </li> */}

          <li className="pb-2">
            Honourable Katrine Conroy, MLA Kootenay West and Minister of Finance
            -{" "}
            <a href="mailto:Katrine.Conroy.MLA@leg.bc.ca">
              Katrine.Conroy.MLA@leg.bc.ca
            </a>
          </li>
          {/* <li className="pb-2">
            MP Richard Cannings, Federal Minister of Resources and MP for South
            Okanagan-West Kootenay -{" "}
            <a href="mailto:richard.cannings@parl.gc.ca">
              richard.cannings@parl.gc.ca
            </a>
          </li> */}
          <li className="pb-2">
            Honourable George Heyman, Minister of Environment and Climate Change
            Strategy -{" "}
            <a href="mailto:ENV.Minister@gov.bc.ca">ENV.Minister@gov.bc.ca</a>
          </li>
          {/* <li className="pb-2">
            Rajeeta Bains, Ministry of Transportation -{" "}
            <a href="mailto:Rajeeta.Bains@gov.bc.ca">Rajeeta.Bains@gov.bc.ca</a>
          </li> */}

          {/* <li className="pb-2">
            Greg Kinnear, West Kootenay Operations -{" "}
            <a href="mailto:Greg.Kinnear@gov.bc.ca">Greg.Kinnear@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            MLA Rob Fleming, Minister of Transportation and Infrastructure -{" "}
            <a href="mailto:Minister.Transportation@gov.bc.ca">
              Minister.Transportation@gov.bc.ca
            </a>
          </li> */}
          {/* <li className="pb-2">
            David Eby, Premier of BC -{" "}
            <a href="mailto:premier@gov.bc.ca">premier@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            Linda Worley - Chair of the RDKB, Elected Area 'B'/Lower
            Columbia-Old Glory Official, and Chair of the Columbia River Treaty
            Local Government Committee -{" "}
            <a href="mailto:lworley@rdkb.com">lworley@rdkb.com</a>
          </li> */}

          <li className="font-bold">
            {" "}
            👉 Optional letter template ✉️{" "}
            <Link to={"/letter"} target="_blank">
              here
            </Link>{" "}
            ✉️
          </li>
        </div>
      </div>
    </div>
  );
}
export default CardSlide;
