import { Link } from "react-router-dom";

const SectionTitle = ({ title, link }) => {
  return (
    <div className="w-100 py-2 border-bottom">
      {link ? (
        <Link to={link}>
          <h6>{title}</h6>
        </Link>
      ) : (
        <h5>{title}</h5>
      )}
    </div>
  );
};

export default SectionTitle;