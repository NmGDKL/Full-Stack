import React from 'react'
import { useState } from 'react'
​
// class Collapse extends React.Component {
​
//     state = {showContent:false}
        
//     showMore = ()=>{
//         this.setState({showContent: !this.state.showContent})
//     }
//     render(){
//         return (
//             <div>
//                 <p>
//                     <button className="btn btn-primary" type="button" onClick={this.showMore}>
//                         Button with data-bs-target
//                     </button>
//                 </p>
                
//                 {this.state.showContent ? (<div className="collapse show">
//                     {this.props.children}
//                 </div>) : null} 
//             </div>
//         )
//     }
// }
​
const Collapse = (props) => {
    const [show, ahmet] = useState(false)
​
    const changeShow = () =>{
        ahmet(!show)
    }
​
    return (
        <div>
            <p>
                <button className="btn btn-primary w-100" type="button" onClick={changeShow}>
                    {props.children.props.cardTitle}
                </button>
            </p>
            {show ? (<div className="collapse show">
                {props.children}
            </div>) : null}
        </div>
    )
}
​
export default Collapse