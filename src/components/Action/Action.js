import React from "react";
import CardSlide from "../CardSlide/CardSlide";

function Action() {
  return (
    <section className="p-4 md:p-12 leading-8" id="actions">
      <h1 className="pb-4">Action</h1>
      <h2 className="font-bold pl-4 pb-4">What can we do?</h2>
      <ul className="px-8">
        <li>
          1. Educate yourself and avoid complacency. Read the company’s
          technical report and mining proposal. Listen to their interviews about
          their plans for this mine site.
          <div className="px-12">
            <li> Check-out the interviews regarding the meeting on CBC. </li>
            <li>
              <a href="https://www.cbc.ca/listen/live-radio/1-110-daybreak-south/clip/15985718-alcohol-harm-reduction-theme-song-boredom-boring-climate">
                May 18
              </a>{" "}
              with the mayor of Rossland.
            </li>

            <li>
              <a href="https://www.cbc.ca/listen/live-radio/1-110-daybreak-south/clip/15985997-g7-update-japan-theme-song-boredom-screen-review">
                May 19
              </a>{" "}
              with Frank Marasco Jr, the lead for the management team.
            </li>
          </div>
        </li>

        <li>
          2. Speak up, this is your community, your lifestyle…you are the one
          who will live with the consequences of such a mine endeavour.
        </li>

        <li>
          3. Show up to events to support those who do the work to take action.
        </li>

        <li>
          4. Check out the{" "}
          <a href="https://saverecordridge.blogspot.com">
            ‘Save Record Ridge Blog’
          </a>
          .{" "}
        </li>

        <li id="petition">
          5. Sign the petition ✍️{" "}
          <a href="https://form.jotform.com/231375084434051"> here </a> ✍️
        </li>

        <li>
          6. Contact government officials with a letter of your concerns.
          <CardSlide />
        </li>

        <li>7. Share this website with friends and family.</li>

        <li>
          8. Create a social media post regarding the threat to the community
          and environment.
        </li>

        <li>
          9. Join the fight. Contact:{" "}
          <a href="mailto:SaveRecordRidge@gmail.com">Email</a>
        </li>

        <li>
          10. Be kind and considerate to those with differing views and
          opinions.
        </li>
      </ul>
    </section>
  );
}

export default Action;
