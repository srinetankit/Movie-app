import React from "react";
import styled from "./navbar.module.css";


const Nav = styled.div`
        width: 100%;
        height: 70px;
        background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
        display: flex;
        justify-content: space-between;
        align-itens: center;
        position : relative;
        &:hover{background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),            
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),            
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)};
`;

const Title = styled.div`
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        font-family: 'Times New Roman', Times, Sarif;
        text-transformation: uppercase;
        margin-left: 20px;
        margin-top:10px;
        &:hover{color : black};
`;

const CartImg = styled.img`
        heigth : 28px;
        width: 60px;
        margin-right : 20px;
`;

const CartIconContainer = styled.div`
        position: relative;
        cursor: pointer;
        margin-top: 10px;
`;

const CartCount = styled.div`
background-color: ${(props) => props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility : ${(props) => props.show ? "visible" : "hidden"}
`;


class Navbar extends React.Component {
    render() {
        const { cartCount } = this.props;
        return (
            <>
                <Nav>
                    <Title>Movie-App</Title>
                    <CartIconContainer>
                        <CartImg src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"
                            alt="Cart Icon" />
                        <CartCount color="orange" show={true}>{cartCount}</CartCount>
                    </CartIconContainer>
                </Nav>
            </>
        )
    }
}
export default Navbar;


// const styles = {
//     nav: {
//         width: "100%",
//         height: "70px",
//         background: "cadetblue",
//         display: "flex",
//         justifyContent: "space-between"
//     },

//     title: {
//         fontSize: "30px",
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-sarif',
//         marginLeft: 20
//     },

//     cartContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },

//     cartIcon: {
//         heigth: 48,
//         width: 60,
//         marginRight: 20,
//         marginTop: 8
//     },

//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12
//     }
// }