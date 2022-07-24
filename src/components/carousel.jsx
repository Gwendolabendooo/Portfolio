import React, { useState, setState } from 'react';
import gsap from "gsap";

import Overlay from './Overlay';

import saveUs from '../img/saveUs.png'
import studLp from '../img/studLp.jpg'
import micro from '../img/Micro.PNG'
import Menu from './Menu';

class carousel extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            previous: 0,
            currentWidth: window.innerWidth,
            currentName: "SAVE US",
            data: [0, 1, 2, 3, 4, 5],
            bgCaroussel: "#D9F5E8"
        };

       this.rotate = this.rotate.bind(this);
    }  

    rotate(rotating, name, bg){
        var boxes = document.querySelectorAll(".box")

        if (this.state.previous > rotating) {
            var pos = 60 * (this.state.previous - rotating)

            boxes.forEach(function(element, index) {
                gsap.to(element, {
                  css: {
                    rotationY: ("+=" + pos + "")
                  },
                  repeat: 0, // 20
                });
              });
        }else if (this.state.previous < rotating) {
            var pos = 60 * (rotating - this.state.previous)

            boxes.forEach(function(element, index) {
                gsap.to(element, {
                  css: {
                    rotationY: ("-=" + pos + "")
                  },
                  repeat: 0, // 20
                });
              });
        }
        
        this.setState({ previous: rotating, currentName: name, bgCaroussel: bg })
    }

    componentDidMount(){
        var boxes = document.querySelectorAll(".box")
        var stage = document.querySelector(".stage");

        document.addEventListener('MenuEvent', e => {
            console.log(e.detail.projet)
            console.log(document.getElementById('d'+e.detail.projet))
            document.getElementById('d'+e.detail.projet).click()
        });
        
        gsap.set(stage, {
          css: {
            perspective: 8000,
            transformStyle: "preserve-3d"
          }
        });
        
        boxes.forEach(function(element, index) {
            console.log(element, index)
            gsap.set(element, {
                css: {
                    rotationY: index * 360 / 6,
                    transformOrigin: "50% 50% -"+window.innerWidth / 2
                }
            });
        });
    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div className='overflow-hidden w-100 h-100 d-flex justify-content-center position-relative align-items-center flex-column' style={{backgroundColor: this.state.bgCaroussel, transition: 'all .8s'}}>
                <Overlay name={this.state.currentName}/>
                <Menu data={this.state.data} selectedData={this.state.previous}/>
                <div className="demoWrapper d-flex" style={{height: this.state.currentWidth / 2.5}}>
                    <div className="stage d-flex justify-content-center align-items-center">
                        <div className="box" id='d0' style={{filter: this.state.previous === 0 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(0, "SAVE US", "#D9F5E8") }>
                            <img src={saveUs} />
                        </div>
                        <div className="box" id='d1' style={{filter: this.state.previous === 1 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(1, "STUD LP", "rgb(66 152 227 / 53%)") }>
                            <img src={studLp} />
                        </div>
                        <div className="box" id='d2' style={{filter: this.state.previous === 2 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(2, "MAISON 3D", "rgb(120 51 224 / 55%)") }>
                            <img src={micro} />
                        </div>
                        <div className="box" id='d3' style={{filter: this.state.previous === 3 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(3, "MICRO GAMES", "#D9F5E8") }> 
                            <img src={micro} />
                        </div>
                        <div className="box" id='d4' style={{filter: this.state.previous === 4 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(4, "SAVE US", "#D9F5E8") }>
                            <img src={micro} />
                        </div>
                        <div className="box" id='d5' style={{filter: this.state.previous === 5 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.4)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(5, "SAVE US", "#D9F5E8") }>
                            <img src={studLp}/>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default carousel;
