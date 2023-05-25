import * as React from "react";
import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState, useEffect } from "react";
import concernData from "../../assets/data/concerns.json";
import "./Concerns.scss";

const Concerns = () => {
  //create a state with project data
  const [concerns] = useState(concernData);
  const listRef = useRef(null);
  const [hasCon, setHasCon] = useState(false);

  useEffect(() => {
    if (concerns.length !== 0) {
      setHasCon(true);
    }
  }, [concerns]);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -240,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 240,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="concerns bg-stone-200" id="concerns">
      {hasCon === true && (
        <>
          <div className="concerns__header">
            <h1 className="concerns__header--title">Areas of Concern</h1>
            <h3 className="concerns__header--subtitle">
              The mine brings multiple concerns that need to be addressed...{" "}
            </h3>
          </div>
          <div className="carousel__container">
            <div className="slide-container">
              {concerns.length > 1 ? (
                <ChevronLeftIcon
                  fontSize="large"
                  cursor="pointer"
                  onClick={scrollLeft}
                ></ChevronLeftIcon>
              ) : (
                <div></div>
              )}

              <div className="items-container" ref={listRef}>
                {concerns.map((item) => {
                  return (
                    <div
                      key={item.concern_id}
                      className="single-item-container"
                    >
                      <Card
                        sx={{
                          width: 200,
                          height: 440,
                          bgcolor: "rgb(36, 37, 93)",
                          boxShadow: 6,
                        }}
                      >
                        <CardContent>
                          <div
                            className="concerns__title"
                            style={{
                              backgroundImage: `url(${item.concern_img})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <p className="concerns__input--moon">
                              {item.concern_title}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
              {concerns.length > 1 ? (
                <ChevronRightIcon
                  fontSize="large"
                  cursor="pointer"
                  onClick={scrollRight}
                ></ChevronRightIcon>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Concerns;
