import {
  Spinner as BootstrapSpinner 
} from "react-bootstrap";

const Spinner = ({text}) => {
  return (
    <div className="text-center">
      <BootstrapSpinner animation="border" role="status" /><br/>
      { text ?? "Loading..." }
    </div>
  );
};

export default Spinner;