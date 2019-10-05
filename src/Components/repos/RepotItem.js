import React from "react";
import PropTypes from "prop-types";

const RepotItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepotItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepotItem;
