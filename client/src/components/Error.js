import React from "react";

function Error({ msg }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
       Algo Salio Mal. Intentelo de nuevo. {msg}
      </div>
    </div>
  );
}

export default Error;
