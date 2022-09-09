import PropType from 'prop-types';

function Menu({ children }) {
    return <nav>{children}</nav>;
}
Menu.propTypes = {
    children: PropType.node.isRequired,
};
export default Menu;
