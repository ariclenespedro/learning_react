import PropTypes from "prop-types";
function Item(props) {
    return(
        <>
            <li>{props.marca} - {props.ano_lancamento}
            </li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    
};

export default Item;