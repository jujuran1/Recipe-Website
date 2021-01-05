import "./BackDrop.css"

const backdrop = (props) => {
    if (props.show)
        return (
            <div
                className="Backdrop"
                onClick={props.clicked}>
            </div>
        );
    return null;
}

export default backdrop;