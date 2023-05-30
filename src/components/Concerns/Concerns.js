import * as React from "react";
import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState, useEffect } from "react";
import concernData from "../../assets/data/concerns.json";
import "./Concerns.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Concerns = () => {
  //create a state with project data
  const [concerns, setConcerns] = useState("");
  const listRef = useRef(null);
  const [hasCon, setHasCon] = useState(false);
  //for modal
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  //functions for modal show and not show
  const handleClose = () => setShow(false);

  const handleOpen = (idConcern) => {
    setShow(true);
    setSelectedItem(idConcern);
  };

  const getConcerns = () => {
    setConcerns(concernData);
    setHasCon(true);
  };

  useEffect(() => {
    getConcerns();
  }, []);

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

  const item =
    concerns && concerns.filter((p) => p.concern_id === selectedItem);

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
                      onClick={() => handleOpen(item.concern_id)}
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
              {show && (
                <Modal show={show}>
                  <Modal.Header>
                    <Modal.Title> {item[0].concern_title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{item[0].concern_data}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose()}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
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
