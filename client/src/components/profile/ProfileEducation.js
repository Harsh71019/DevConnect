import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Degree:{degree}</strong>
      </p>
      <p>
        <strong>Field Of Study:{fieldofstudy}</strong>
      </p>
      <p>
        <strong>Description:{description}</strong>
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
