import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Pagination.styles.scss";
export default function Pagination() {
  return (
    <div className="landing__pagination">
      <span>Showing 1 to 12 of 20 entries</span>
      <div className="pages">
        <ArrowBackIosIcon />
        <span className="current__page">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
