import React, {Component} from 'react';
import {Row, Col,} from 'antd';
import '../style.css';
import Swiper1 from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import banner from '../img/banner.jpg';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';

export default class About extends Component {

    state = {
        list: [img1,img2,img3]
    }


    componentDidMount(){
        const mySwiper = new Swiper1('.swiper-container', {
            loop: true,//这里是自动轮播
            autoplay:{
                delay:2000 ,
                disableOnInteraction: false
            },
            // pagination : {
            //     el:'.swiper-pagination',
            // }
        });
    }

    // componentDidMount(){
    //     this.setState({
    //         list: [img1,img2,img3]
    //     })
    // }



    render() {
        const {list} = this.state;
        return (
            <div>
                <div style={{textAlign: 'center'}}><img src={banner} style={{width: '80%', height: 'auto'}}/></div>
                <Row>
                    <Col span={6}>111</Col>
                    <Col span={8}>
                        <div className="swiper-container">
                                {
                                    list.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <img src={item}  style={{width: '50%'}}/>
                                                {/*<p>{item}</p>*/}
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        );
    }
}

// export default Form.create()(About);
