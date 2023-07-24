import React from 'react';

export default function Alert(props) {
  return (
    
    props.alert &&<div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.Type}</strong> : {props.alert.Message}
</div>

    
  );
}
