import React, {Component} from 'react';
import '../style.css';
import Swiper1 from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

export default class Swiper extends Component {

    componentDidMount(){
        const mySwiper = new Swiper1('.swiper-container', {
            loop: true, //这里是自动轮播
            autoplay:{
                delay:2000 ,
                disableOnInteraction: false
            },
            // pagination : {
            //     el:'.swiper-pagination',
            // }
        });
    }

    render() {
        return (
            <div className="swiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.swiperPic.map((item,index)=>{
                                return(
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.src} alt={item.alt}/>
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
