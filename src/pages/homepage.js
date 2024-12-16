import "./homepage.css";
import Navbar from "../components/navbar";
import Selector from "../components/selector";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Selector />
      <div id="home-container">
        <h1>Welcome to Sorting Visualizer</h1>
        <h2>About the Project</h2>
        <p>
          Sorting is a very classic problem of reordering items (that can be
          compared, e.g., integers, floating-point numbers, strings, etc) of an
          array (or a list) in a certain order (increasing, non-decreasing
          (increasing or flat), decreasing, non-increasing (decreasing or flat),
          lexicographical, etc). There are many different sorting algorithms,
          each has its own advantages and limitations. Sorting is commonly used
          as the introductory problem in various Computer Science classes to
          showcase a range of algorithmic ideas. Without loss of generality, we
          assume that we will sort only Integers, not necessarily distinct, in
          non-decreasing order in this visualization.
        </p>
        <h2>Motivation</h2>
        <p>
          Sorting problem has a variety of interesting algorithmic solutions
          that embody many Computer Science ideas: Comparison versus
          non-comparison based strategies, Iterative versus Recursive
          implementation, Divide-and-Conquer paradigm (e.g., Merge Sort or Quick
          Sort), Best/Worst/Average-case Time Complexity analysis, Randomized
          Algorithms, etc. When an (integer) array A is sorted, many problems
          involving A become easy (or easier), please review the applications,
          the slower/harder unsorted array solutions, and the faster/easier
          sorted array solutions.
        </p>
        <h2>How to use?</h2>
        <p>
          Click on one of the <strong>Algorithms</strong> on the top to proceed.
        </p>
      </div>
    </>
  );
};

export default HomePage;
