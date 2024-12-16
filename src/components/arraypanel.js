import "./arraypanel.css";

const ArrayPanel = ({
  arr,
  setArr,
  generateRandomArray,
  arrLen,
  setArrLen,
}) => {
  const handleRandom = () => {
    setArr(generateRandomArray(arrLen, 10, 50));
  };

  return (
    <>
      <div id="array-container">
        <p>
          Array:{" "}
          {arr.map((x) => {
            return `${x} `;
          })}
        </p>
        N ={" "}
        <input
          id="user-arr-size"
          type="number"
          autocomplete="off"
          min="1"
          max="10"
          value={arrLen}
          onChange={(e) => setArrLen(e.target.value)}
        ></input>
        <button className="array-container-buttons" onClick={handleRandom}>
          Random
        </button>
      </div>
    </>
  );
};

export default ArrayPanel;
