import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
const PriceCard = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {item.name}
            </h5>
            <h6 className="card-price text-center">
              {item.currency}
              {item.price}
              <span className="period">/{item.period}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {item.feature.map((value) => {
                return (
                  <li className={value.isEnable ? "" : "text-muted"}>
                    <span className="fa-li">
                      {value.isEnable ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon icon={faTimes} />
                      )}
                    </span>
                    <span>
                      {value.isBold ? (
                        <strong>{value.title}</strong>
                      ) : (
                        value.title
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="d-grid">
              <a href="#!" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
