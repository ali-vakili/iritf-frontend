import { Link } from "react-router-dom";

const SectionTitle = ({ title, link }) => {
  return (
    <div className="w-100 py-2 border-bottom section-title">
      {link ? (
        <Link to={link}>
          <h5 style={{"color":"#212529"}}>{title}</h5>
        </Link>
      ) : (
        <h5>{title}</h5>
      )}
    </div>
  );
};

export default SectionTitle;