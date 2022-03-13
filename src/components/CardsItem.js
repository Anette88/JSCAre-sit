import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardsItem({ id, title, supertype}) {
	return (
		<Link to={`detail/${id}`}>
			<h5>{title}</h5>
			<p>{supertype}</p>
           
		</Link>
	);
}

CardsItem.propTypes = {
	title: PropTypes.string.isRequired,
	supertype: PropTypes.string.isRequired,
};

export default CardsItem;