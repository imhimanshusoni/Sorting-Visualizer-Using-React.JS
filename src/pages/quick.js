import Navbar from "../components/navbar";
import Selector from "../components/selector";
import ArrayPanel from "../components/arraypanel";

const Quick = ({ arr, setArr, generateRandomArray, arrLen, setArrLen }) => {
  return (
    <>
      <Navbar />
      <Selector />
      <ArrayPanel
        arr={arr}
        setArr={setArr}
        generateRandomArray={generateRandomArray}
        arrLen={arrLen}
        setArrLen={setArrLen}
      />
    </>
  );
};

export default Quick;
