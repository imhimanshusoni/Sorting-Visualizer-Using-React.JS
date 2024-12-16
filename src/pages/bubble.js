import Navbar from "../components/navbar";
import Selector from "../components/selector";
import ArrayPanel from "../components/arraypanel";
import Bargraph from "../components/bargraph";

const Bubble = ({ arr, setArr, generateRandomArray, arrLen, setArrLen }) => {
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
      <Bargraph arr={arr} setArr={setArr} />
    </>
  );
};

export default Bubble;
