import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardsItem({ id, types, supertype}) {
	return (
		<Link to={`detail/${id}`}>
			<h5>{types}</h5>
			<p>{supertype}</p>
		</Link>
	);
}

CardsItem.propTypes = {
	types: PropTypes.string.isRequired,
	supertype: PropTypes.string.isRequired,
};

export default CardsItem;