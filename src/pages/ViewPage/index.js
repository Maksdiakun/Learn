import React from "react";
import "./index.scss";
import StudySheet from "../../components/StudySheet";
import VideSection from "../../components/VideSection";
const ViewPage = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="view_page width_125">
      <VideSection id={id} />
      <StudySheet id={id} />
    </div>
  );
};
export default ViewPage;
