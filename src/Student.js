// import React, { Component } from 'react'

// class Student extends Component {
//     render() {
//         const { name, marks } = this.props;
//         return (<>
//             {/* <hr /> */}
//             <h1>Hello {name}</h1>
//             <h3>You Scored {marks}%</h3>
//             <hr />
//         </>
//         )
//     }
// }

// function Student(props) {
//     const { name, marks } = props;
//     return (
//         <>
//             <h1>Hello {name}</h1>
//             <h3>You have Secured {marks}</h3>
//             <hr />
//         </>
//     )
// }


function Student(props) {
    const { name, marks } = props;
    return (
        <>
            <h1>Hello {name}</h1>
            <h3>You have Secured {marks}</h3>
            <hr />
        </>
    )
}
export default Student;