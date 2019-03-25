import React, {Component} from 'react';
import { Form, Input, Button, Table, Divider, Tag } from 'antd';
import '../style.css';
import {ajax} from '../common/ajax';
import {sxAjax} from '../commons/ajax';
import uuid from 'uuid/v4';
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

import './style.css';

class Index extends Component {

    state = {
        hotSearch: ['装修建议', '查找店铺', '产品搜索', '查找店铺', '产品搜索', '查找店铺', '产品搜索', '查找店铺', '产品搜索'],
        swiperPic: [
            {src: swiperBanner1, alt: 'pic1', text: '[新闻]路边喷绘：不掉色才是最长情的告白'},
            {src: swiperBanner2, alt: 'pic2', text: '[新闻]上新百余款全新涂料'},
            {src: swiperBanner3, alt: 'pic3', text: '[新闻]活动继续'},
        ],
        data : [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }]
    };

    componentDidMount () {
        // ajax({
        //     data: {busy: false},
        //     type: 'GET',
        //     url: '/api/slave',
        //     success: res => {
        //         console.log(res);
        //     }
        // });

        this.handleSearch();

        // fetch("/api/slave?busy=false",{
        //     method: "GET",
        // })
        //     .then(res=>res.json())
        //     .then(res=>{console.log(res)});
    }

    handleSearch = () => {
        let params = {
            a: 1
        };

        sxAjax.post(`/log`,params)
            .then(res=>{
                console.log(res);
            })
    };



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
            } else {
                console.log(err);
            }
        });
    };

    handleChange = (rowkey,record) => {
        // console.log(e.target.value);
        console.log(rowkey);
        console.log(record);
        const data = [...this.state.data];
        data.forEach(item=>{
            // item.name = e.target.value;
        });
        console.log(data);
        // this.setState({
        //     data: data
        // })
    };

    render() {
        const sectionStyle = {
            width: "100%",
            height: "350px",
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'left,bottom',
            overflow: "hidden"
        };
        const { getFieldDecorator } = this.props.form;
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },{
            title: 'Action',
            key: 'action',
            render: (rowkey,record) => (
                <Form.Item>
                    {getFieldDecorator('name&'+uuid(), {
                        initialValue: record.name,
                        onChange: this.handleChange(rowkey,record)
                    })(
                        <Input />
                    )}
                </Form.Item>
            ),
        }];
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
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Table columns={columns} dataSource={this.state.data} />
                        <Button type="primary" onClick={this.handleSubmit} >提交</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Form.create()(Index);

// export withRouter(Index);
