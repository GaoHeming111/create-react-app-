import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun } from '../redux/redux';
import '../style.css';

const mapStatetoProps= state=>({num: state });
const actionCreators = { addGun, removeGun };
Life = connect(mapStatetoProps, actionCreators)(Life);

export default class Life extends Component {
    render() {
        let store = this.props.store;
        let addGun = this.props.addGun;
        let removeGun = this.props.removeGun;
        let num = store.getState();
        return (
            <div>
                <h1>
                    现在有机枪 { num } 把
                </h1>
                <button onClick={()=>store.dispatch(addGun())}> 申请武器</button>&nbsp;
                <button onClick={()=>store.dispatch(removeGun())}> 上交武器</button>
            </div>/*onClick后面的值必须是纯函数的形式，而不能是一段可执行代码*/
        )
    }
}
