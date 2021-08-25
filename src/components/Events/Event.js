import React from "react";
import "./css/EventsPage.css";
import Modal from "../Modal";

const convertTime = (time) => {
  var a = new Date(time * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  return date + " " + month + " " + year;
};

export default function Event(props) {
  if (props.width > 768)
    return (
      <div className="tp-item row">
        <div className="col-sm-5 tp-item-image">
          <img src={props.img} alt={props.title} className="img-fluid"></img>
        </div>
        <div className="c-line">
          <div className="c-circle"></div>
        </div>
        <div className="col-sm-5 tp-item-info">
          <div className="tp-item-title">{props.title}</div>
          <div className="tp-item-date tp-item-desc">
            <span>{convertTime(props.date)}</span> <br />
          </div>
          <div className="tp-item-desc">
            <p>{props.desc}</p>
          </div>
          <Modal id={props.id}></Modal>
        </div>
      </div>
    );
  else
    return (
      <div className="l-line">
        <div className="c-circle"></div>
        <div className="tp-item-image">
          <img src={props.img} alt={props.title} className="img-fluid"></img>
        </div>
        <div className=" tp-item-info">
          <div className="tp-item-title">{props.title}</div>
          <div className="tp-item-date tp-item-desc">
            {convertTime(props.date)} <br />
          </div>
          <div className="tp-item-desc">
            <p>{props.desc}</p>
          </div>
          <Modal id={props.id}></Modal>
        </div>
      </div>
    );
}
