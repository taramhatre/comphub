import React, {Component} from 'react';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {PropTypes} from 'prop-types';
import HeaderContainer from '/imports/homepage/slideShowBlock/components/Header.jsx';
import CategoryPage from '/imports/homepage/categoryBlock/components/CategoryPage.jsx';
import TopProductsBlock from '/imports/homepage/topProductsBlock/components/TopProductsBlock.jsx';
import BrandsBlock from '/imports/homepage/brandsBlock/components/BrandsBlock.jsx';
import ServicesBlock from '/imports/homepage/servicesBlock/components/ServicesBlock.jsx';
import ContactUsBlockContainer from '/imports/homepage/contactUsBlock/components/ContactUsBlock.jsx';
import { SlideShow } from '/imports/adminDashboard/slideshow/api/slideshow.js';

export default class SlideShowBlock extends TrackerReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				allSlideShow : Meteor.subscribe('allSlideShow'),
			}
		}
	}

	showallSlides(){
		return SlideShow.find({});
	}

	render(){
		return(
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecEleHomeWrap">
					<HeaderContainer/>
					<div id="mySlideShow" className="carousel slide ECSlideShow" data-ride="carousel">
					  
					<ol className="carousel-indicators">
						{ this.showallSlides().map( (slides,index)=>{
							if(index == 0){
								var activeStatus = 'active';
							}else{
								var activeStatus = '';
							}	
							return (
									<li data-target="#mySlideShow" data-slide-to={index} className={activeStatus}></li>
								);
						  }) 
						}
					</ol>

					  <div className="carousel-inner">
						{ this.showallSlides().map( (slides,index)=>{
							if(index == 0){
								var activeStatus = 'active';
							}else{
								var activeStatus = '';
							}	
							return (
								    <div className={"item "+ activeStatus} key={index}>
								      <img src="/img/slide3.jpg" className="col-lg-12 col-sm-12 col-md-12 col-xs-12 bannerimg"/>
								      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sliderTitles">
									      <div><h1> {slides.tagLine1}</h1></div>
									      <div><h4> {slides.tagLine2}</h4></div>
									      <div><h4> <b>{slides.tagLine3} </b></h4></div>
								      </div>
								    </div>
								);
						  }) 
						}

					  </div>

					  <a className="left carousel-control" href="#mySlideShow" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#mySlideShow" data-slide="next">
					    <span className="glyphicon glyphicon-chevron-right"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
					<CategoryPage/>
					<TopProductsBlock/>
					<BrandsBlock/>
					<ServicesBlock/>
					<ContactUsBlockContainer/>
				</div>
			);
	}
}