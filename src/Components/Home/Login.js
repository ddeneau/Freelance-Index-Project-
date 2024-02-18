const LoginButton = (props) => {
    return (
      <button
        {...props}
        className="border border-neutral-700 bg-neutral-800 text-neutral-200 font-semibold py-2 px-4 rounded-md md:hover:bg-neutral-700 md:hover:text-white md:transition-all md:duration-300"
      >
        {props.children || "Login"}
      </button>
    );
  };

  export default LoginButton