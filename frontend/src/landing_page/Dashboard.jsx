import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <center>
        <button type="button" class="btn btn-warning mt-5 mb-5">
          <Link to="http://localhost:3000/">Go To Dashboard</Link>
        </button>
      </center>
    </>
  );
};

export default Dashboard;
