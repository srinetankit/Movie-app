import React, { Component } from "react";
import styled from "./navbar.module.css";


class Navbar2 extends React.Component {
    render() {
        const { cartCount } = this.props
        return (
            <>
                <div className={styled.nav}>
                    <div className={styled.title}>Movie-App</div>
                    <div className={styled.cartIconContainer}>
                        <img className={styled.cartImg} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"
                            alt="Cart Icon" />
                        <span className={styled.cartCount}>{cartCount}</span>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar2;

