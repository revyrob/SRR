import { useRef } from "react";
import { useInView } from "framer-motion";

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
        <div className="px-4 md:px-12">
          <li className="pb-2">
            Southeast Mines Office -{" "}
            <a href="mailto:MMD-Cranbrook@gov.bc.ca">MMD-Cranbrook@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            Kathie Wagar, Regional Director for SE Mines Office{" "}
            <a href="mailto:kathie.wagar@gov.bc.ca">kathie.wagar@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            Ministry of Energy, Mines, and Low Carbon Innovation (Honourble
            Jodie Osborne) -{" "}
            <a href="mailto:EMLI.minister@gov.bc.ca">EMLI.minister@gov.bc.ca</a>
          </li>
          <li className="pb-2">
            MLA Kootenay West and Minister of Finance (Honourable Katrine
            Conroy) -{" "}
            <a href="mailto:Katrine.Conroy.MLA@leg.bc.ca">
              Katrine.Conroy.MLA@leg.bc.ca
            </a>
          </li>
          <li className="pb-2">
            Federal Minister of Resources and MP for South Okanagan-West
            Kootenay (MP Richard Cannings) -{" "}
            <a href="mailto:richard.cannings@parl.gc.ca">
              richard.cannings@parl.gc.ca
            </a>
          </li>
          <li className="pb-2">
            Minister of Environment and Climate Change Strategy (Honourable
            George Heyman) -{" "}
            <a href="mailto:ENV.Minister@gov.bc.ca">ENV.Minister@gov.bc.ca</a>
          </li>
          <li className="font-bold">
            {" "}
            👉 Check out our letters ✉️{" "}
            <a href="https://docs.google.com/document/d/1edDJj_Uud-Bm4e6b8Nm-tbs4tGvP0A7GtEBRSup5JNk/edit?usp=sharing">
              here
            </a>{" "}
            ✉️
          </li>
        </div>
      </div>
    </div>
  );
}
export default CardSlide;
