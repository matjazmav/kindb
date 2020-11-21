import React from "react";
import PersonImages from "../../components/PersonImages";

const Step2 = () => {
  return (
    <section>
      <h2 className="text-center">Upload</h2>
      <PersonImages type="Father" />
      <PersonImages type="Mother" />
      <PersonImages type="Son" index={1} />
      <PersonImages type="Son" index={2} />
    </section>
  );
};

export default Step2;