import React from "react"

import NavItems from "../NavItems/NavItems";
import BackDrop from "../../UI/BackDrop/BackDrop"
import Aux from "../../../hoc/Auxiliary"
import "./SideDrawer.css";

const sideDrawer = (props) => {
    let classes = "SideDrawer Close"
    if (props.sdState)
        classes = "SideDrawer Open"
    return (
        <Aux>
            <BackDrop show={props.sdState} clicked={props.drawerToggle} />
            <div className={classes}>
                <div>LOGO</div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;