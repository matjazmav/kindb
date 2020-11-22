import {
  Button
} from "react-bootstrap";

const Step1 = ({onNext}) => {
  return (
    <section className="text-justify">
      <h2 className="text-center">Intro</h2>
      <p>
        One of the critical steps in <b>machine learning</b> / <b>artificial intelligence</b> is obtaining large and qualitative dataset.

        To provide such dataset to the <b>research community</b>, we are kindly asking you for
        your contribution. Please take <b>5 minutes</b> and contribute to our dataset.
      </p>
      <p>
        We are tackling the problem of a <b>kinship</b> recognition, verification and synthesis of the <b>facial images</b>.

        While some similar dataset already exists, the <b>quality</b> of images is <b>poor</b>.
      </p>
      Properties of high quality image are:
      <ul>
        <li>The image contain <b>only single face</b></li>
        <li>Resolution of the facial area is big as possible</li>
        <li>Face is possioned directly to the camera</li>
        <li>Whole face is visible</li>
      </ul>
      <div className="workflow-buttons">
        <Button variant="outline-primary" onClick={onNext}>Contribute</Button>
      </div>
    </section>
  );
};

export default Step1;