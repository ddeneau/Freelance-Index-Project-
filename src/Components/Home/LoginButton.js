import { Link } from 'react-router-dom';

const button_style = "border border-neutral-700 bg-neutral-800 text-neutral-200 font-semibold py-2 px-10 m-2 rounded-md hover:bg-neutral-700 hover:text-white transition-all duration-300";

const LoginButton = ({ link, children }) => {
    return (
        <Link to={link}>
            <button className={button_style}>
                {children}
            </button>
        </Link>
    );
};

export default LoginButton;