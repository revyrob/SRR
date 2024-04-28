import React from "react";
import CardSlide from "../CardSlide/CardSlide";
import ReactAudioPlayer from "react-audio-player";
import interview from "../../assets/data/audio.json";

function Action() {
  return (
    <section className="p-8 leading-8 max-w-screen-xl m-auto" id="actions">
      <h1 className="pb-4">Actions</h1>
      <h2 className="font-bold pl-4 pb-4">What can you do?</h2>
      <ol className="px-2 md:px-8">
        <li className="py-2">
          1. Submit an impact statement to the Chief Inspector of mines and to
          us (SRR):
          <br></br>
          Chief Inspector of Mines, Ministry of Energy and Mines and Low Carbon
          - <a href="mailto:mmd-cranbrook@gov.bc.ca">mmd-cranbrook@gov.bc.ca</a>
          <br></br>
          Mailing address: 202-100 Cranbrook Street North, Cranbrook, B.C. V1C
          3P9
          <br></br>
          Save Record Ridge -{" "}
          <a href="mailto:saverecordridge@gmail.com">
            saverecordridge@gmail.com
          </a>
        </li>
        <li className="py-2">
          2. Attend the public comment period on May 17th, 2024.
        </li>
        <li className="py-2">
          3. Educate yourself and avoid complacency.
          <div className="px-2 md:px-12">
            <li className="px-4">
              i. Read the WHY's application:{" "}
              <a
                href="https://mines.nrs.gov.bc.ca/p/65b3e2957c6b1c00222b1eef/docs"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                WHY's Application
              </a>
              <br></br>
              West High Yield (W.H.Y.) Resources Ltd.'s proposed RRIMM Project
              is an intermediate-advanced stage
            </li>
            <li className="px-4">
              ii. Research past reports from SEDAR (the System for Electronic
              Document Analysis and Retrieval) on{" "}
              <a
                href="https://www.sedar.com/DisplayCompanyDocuments.do?lang=EN&issuerNo=00023436"
                target="_blank"
                rel="noreferrer"
              >
                W.H.Y.
              </a>
            </li>
            <li className="px-4">
              iii. An
              <a
                href="
https://www.castlegarnews.com/news/mayor-concerned-about-open-pit-mine-proposal-near-rossland/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                article
              </a>{" "}
              from 2022 about the proposed mine by Rossland.
            </li>
            <li className="px-4">iv. Check out these interviews:</li>
            <ol className="pl-2">
              <li className="px-12">
                <a
                  href="https://thenarwhal.ca/rossland-mine-critical-minerals/"
                  target="_blank"
                  rel="noreferrer"
                >
                  August 16, 2023
                </a>{" "}
                A community transformed from mining town to resort destination.
                It doesn’t want to go back
              </li>
              <li className="px-12">
                <a
                  href="https://www.cbc.ca/listen/live-radio/1-110/clip/15985719"
                  target="_blank"
                  rel="noreferrer"
                >
                  May 18, 2023
                </a>{" "}
                with City of Rossland Councillor Steward Spooner.
              </li>

              <li className="px-12">
                <a
                  href="https://www.cbc.ca/listen/live-radio/1-110/clip/15986003"
                  target="_blank"
                  rel="noreferrer"
                >
                  May 19, 2023
                </a>{" "}
                with CEO of W.H.Y., Frank Marasco Jr.
              </li>
              <li className="px-12">
                <a
                  href="https://theecocentricblog.wordpress.com/2023/06/08/june-6-2023-the-pyrocene-canadas-forests-light-up-comment-from-chris-hatch-open-pit-magnesium-mine-near-rossland-fairy-creek-logging-deferred-again-but-old-growth-still-falling/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  June 6, 2023
                </a>{" "}
                Melanie Mercier on EcoCentric with Keith Wiley.
                <ReactAudioPlayer src={interview.audio} controls />
              </li>

              <li className="px-12">
                <a
                  href="https://on.soundcloud.com/xv5w8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  June 12, 2023
                </a>{" "}
                Melanie Mercier on Kootenay Coop Radio, Kootenay Morning show
                with Stephenie Hendricks.
              </li>
            </ol>
            <li className="px-4">
              v.{" "}
              <a
                href="https://whyresources.com/record-ridge-magnesium-project/"
                target="_blank"
                rel="noreferrer"
              >
                W.H.Y.'s website
              </a>{" "}
              and proposed mine in Rossland and the period of time they plan to
              be in operation.
            </li>
          </div>
        </li>

        <li className="py-2">
          4. Speak up, this is your community, your lifestyle…you are the one
          who will live with the consequences of such a mine endeavour.
        </li>

        <li className="py-2">
          5. Show up to events to support those who do the work to take action.
        </li>

        <li className="py-2">
          6. Check out the{" "}
          <a href="https://saverecordridge.blogspot.com">
            ‘Save Record Ridge Blog’
          </a>
          .{" "}
        </li>

        <li>
          7. Contact government officials with a letter of your concerns.
          <CardSlide />
        </li>

        <li className="py-2">8. Share this website with friends and family.</li>

        <li className="py-2">
          9. Create a social media post regarding the threat to the community
          and environment.
        </li>

        <li className="py-2">
          10. Join the fight. Contact:{" "}
          <a href="mailto:SaveRecordRidge@gmail.com">Email</a>
        </li>

        <li className="py-2">
          11. Be kind and considerate to those with differing views and
          opinions.
        </li>
      </ol>
    </section>
  );
}

export default Action;
