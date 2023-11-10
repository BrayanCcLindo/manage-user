import { useState } from "react";

function UseAlert() {
  const defaulOptions = {
    active: false,
    message: "",
    type: "",
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaulOptions,
  });

  const toggleAlert = () => {
    setAlert({ ...alert, active: !alert.active });
  };

  return { alert, setAlert, toggleAlert };
}

export default UseAlert;
