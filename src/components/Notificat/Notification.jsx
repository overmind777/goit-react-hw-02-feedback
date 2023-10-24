import PropTypes from 'prop-types';

const Notification = ({ msg }) => {
  return (
    <>
      <h2>{msg}</h2>
    </>
  );
};

export default Notification;

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
