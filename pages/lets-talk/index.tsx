import Challenge from "./challenge";
import FindUs from "./find-us";

const LetsTalk = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <Challenge />
      <FindUs />
    </div>
  );
};

export default LetsTalk;
