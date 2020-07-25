import React from 'react';
import ReactDOM from 'react-dom';

const Info = () => {
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info please don't share!</p>
      <WrappedComponent />
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<Info info="There are the details" />, document.getElementById('app'));
