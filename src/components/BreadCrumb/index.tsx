import React from "react";
import { styles } from "./styles.css";
import { ArrowRight } from "../custom-icons";

export default function Breadcrumb() {
  return (
    <div className="flex" aria-label="Breadcrumb">
      <ol className={`${styles.breadCrumbWrapper}`}>
        <li className="inline-flex items-center">
          <a
            href="#"
            className={`${styles.link} text-gray-400`}
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ArrowRight />
            <a
              href="#"
              className={`${styles.link} text-gray-400`}
            >
              Booking History
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ArrowRight />
            <span className={`${styles.link} text-gray-400`}>
              Flight
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ArrowRight />
            <span className={`${styles.link} text-primary`}>
            STFL17121182045413
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
}
