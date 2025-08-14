const text_field_style = "px-5 py-2 text-2xl m-5 rounded-md border-2 border-black"

const TextField = ({ text, type, id, placeholder, required }) => {

	if (type === "password") {
		return (
			<input text={text} type={type} id={id}
				class={text_field_style}
				placeholder={placeholder} required={required}></input>
		)
	} else { 

		return (
			<input text={text} type={type} id={id}
				class={text_field_style}
				placeholder={placeholder} required={required}></input>
		)
	}
};

export default TextField;