import "./Input.css"

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ("input"):
            inputElement = (
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.onChange} />
            )
            break;
        case ("textarea"):
            inputElement = (
                <textarea
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.onChange} />
            )
            break;
        case ("select"):
            inputElement = (
                <select
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.onChange}>

                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} />;
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;