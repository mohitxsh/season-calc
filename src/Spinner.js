import React from "react";

const Spinner = (props) => {
  return (
    <div>
      <div className='ui active dimmer'>
        <div className='ui text loader'>{props.loadingMessage}</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  loadingMessage: "loading...",
};

export default Spinner;
