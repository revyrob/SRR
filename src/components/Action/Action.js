import React from "react";
import CardSlide from "../CardSlide/CardSlide";
import ReactAudioPlayer from "react-audio-player";
import interview from "../../assets/data/audio.json";

function Action() {
  return (
    <section className="p-8 leading-8 max-w-screen-xl m-auto" id="actions">
      <h1 className="pb-4">Action</h1>
      <h2 className="font-bold pl-4 pb-4">What can you do?</h2>
      <ul className="px-2 md:px-8">
        <li className="py-2">
          1. Educate yourself and avoid complacency.
          <div className="px-2 md:px-12">
            <li className="py-2">
              i. Read the company’s{" "}
              <a
                href="https://www.sedar.com/GetFile.do?lang=EN&docClass=24&issuerNo=00023436&issuerType=03&projectNo=03468693&docId=5325680"
                target="_blank"
                rel="noreferrer"
              >
                technical report
              </a>
              , which is required to contain an overview of the project,
              including its location, history, geological setting,
              mineralization, exploration, drilling, sample preparation, data
              verification, mineral processing, and metallurgical testing.
            </li>
            <li className="py-2">
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
            <li className="py-2">
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
            <li className="py-2">iv. Check out these interviews:</li>
            <ul className="pl-2">
              <li className="py-2">
                <a
                  href="https://www.cbc.ca/listen/live-radio/1-110/clip/15985719"
                  target="_blank"
                  rel="noreferrer"
                >
                  May 18
                </a>{" "}
                with City of Rossland Councillor Steward Spooner.
              </li>

              <li className="py-2">
                <a
                  href="https://www.cbc.ca/listen/live-radio/1-110/clip/15986003"
                  target="_blank"
                  rel="noreferrer"
                >
                  May 19
                </a>{" "}
                with CEO of W.H.Y., Frank Marasco Jr.
              </li>
              <li className="py-2">
                <a
                  href="https://theecocentricblog.wordpress.com/2023/06/08/june-6-2023-the-pyrocene-canadas-forests-light-up-comment-from-chris-hatch-open-pit-magnesium-mine-near-rossland-fairy-creek-logging-deferred-again-but-old-growth-still-falling/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  June 6
                </a>{" "}
                Melanie Mercier on EcoCentric with Keith Wiley.
                <ReactAudioPlayer src={interview.audio} controls />
              </li>

              <li className="py-2">
                <a
                  href="https://on.soundcloud.com/xv5w8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  June 12
                </a>{" "}
                Melanie Mercier on Kootenay Coop Radio, Kootenay Morning show
                with Stephenie Hendricks.
              </li>
            </ul>
            <li className="py-2">
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
          2. Speak up, this is your community, your lifestyle…you are the one
          who will live with the consequences of such a mine endeavour.
        </li>

        <li className="py-2">
          3. Show up to events to support those who do the work to take action.
        </li>

        <li className="py-2">
          4. Check out the{" "}
          <a href="https://saverecordridge.blogspot.com">
            ‘Save Record Ridge Blog’
          </a>
          .{" "}
        </li>

        <li id="petition" className="py-2">
          5. Sign the petition ✍️{" "}
          <a href="https://form.jotform.com/231375084434051"> here </a> ✍️
        </li>

        <li>
          6. Contact government officials with a letter of your concerns.
          <CardSlide />
        </li>

        <li className="py-2">7. Share this website with friends and family.</li>

        <li className="py-2">
          8. Create a social media post regarding the threat to the community
          and environment.
        </li>

        <li className="py-2">
          9. Join the fight. Contact:{" "}
          <a href="mailto:SaveRecordRidge@gmail.com">Email</a>
        </li>

        <li className="py-2">
          10. Be kind and considerate to those with differing views and
          opinions.
        </li>
      </ul>
    </section>
  );
}

export default Action;
