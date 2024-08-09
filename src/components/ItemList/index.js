import React from "react";
import "./styles.css";

const ItemList = ({ title, description }) => {
    return (<>
        <div className="item-list">
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
        <hr style={{marginLeft: '24px'}} />
    </>
    );
}

export default ItemList;
