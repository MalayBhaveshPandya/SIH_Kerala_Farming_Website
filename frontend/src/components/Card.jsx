import { Link } from "react-router-dom";
import "./Card.css";
function Card(props) {
  return (
    <div className="dashboard-card">
      {props.b ? (
        <button className="dashboard-btn secondary">{props.b}</button>
      ) : (
        <>
          <div className="dashboard-card-head">
            <h2>{props.h1}</h2>
            <p className="location">{props.h2}</p>
          </div>

          {/* ✅ Image Section */}
          {props.img && (
            <div className="card-img">
              <img src={props.img} alt={props.h1} />
            </div>
          )}

          <div className="dashboard-card-body">
            <p>{props.p1}</p>
          </div>
          <div className="dashboard-card-body">
            <p>{props.p2}</p>
          </div>
          <div className="dashboard-card-footer">
            <Link to="/dashboard2" className="dashboard-link">
              Show more
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
