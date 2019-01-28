import React, {Component} from 'react';
import '../style.css';
import {ajax} from '../common/ajax';
import banner from '../img/banner.jpg';
import swiperBanner1 from '../img/swiperBanner1.jpg';
import swiperBanner2 from '../img/swiperBanner2.jpg';
import swiperBanner3 from '../img/swiperBanner3.jpg';
import {
    withRouter
} from 'react-router-dom';

import Swiper from '../pages/Swiper';
import ProductNews from '../pages/ProductNews';
import TodayHeadline from '../pages/TodayHeadline';
import CompanyProducts from '../pages/CompanyProducts';

class Index extends Component {

    state = {
        hotSearch: ['装修建议', '查找店铺', '产品搜索', '查找店铺', '产品搜索', '查找店铺', '产品搜索', '查找店铺', '产品搜索'],
        swiperPic: [
            {src: swiperBanner1, alt: 'pic1', text: '[新闻]路边喷绘：不掉色才是最长情的告白'},
            {src: swiperBanner2, alt: 'pic2', text: '[新闻]上新百余款全新涂料'},
            {src: swiperBanner3, alt: 'pic3', text: '[新闻]活动继续'},
        ]
    };

    componentDidMount () {
        ajax({
            data: {busy: false},
            type: 'GET',
            url: '/api/slave',
            success: res => {
                console.log(res);
            }
        });

        // fetch("/api/slave?busy=false",{
        //     method: "GET",
        // })
        //     .then(res=>res.json())
        //     .then(res=>{console.log(res)});
    }

    handleSearch = () => {
        // this.props.history.push('/About');
    };

    render() {
        const sectionStyle = {
            width: "100%",
            height: "350px",
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'left,bottom',
            overflow: "hidden"
        };
        return (
            <div>
                <div style={sectionStyle} />
                <div style={{display: "flex", width: "65%", paddingTop: 20, margin: "0 auto"}}>
                    <Swiper swiperPic={this.state.swiperPic}/>
                    <ProductNews/>
                </div>
                <div style={{display: "flex", width: "65%", paddingTop: 20, margin: "0 auto"}}>
                    <TodayHeadline/>
                    <CompanyProducts/>
                </div>
            </div>
        );
    }
}

export default withRouter(Index)
