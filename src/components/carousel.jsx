import React, { useState, setState } from 'react';
import gsap from "gsap";

import saveUs from '../img/saveUs.png'
import studLp from '../img/studLp.jpg'
import micro from '../img/Micro.PNG'

class carousel extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            previous: 0,
            currentWidth: window.innerWidth
        };

       this.rotate = this.rotate.bind(this);
    }  

    rotate(rotating){
        console.log(this.state.previous)
        var boxes = document.querySelectorAll(".box")

        if (this.state.previous > rotating) {
            var pos = 60 * (this.state.previous - rotating)
            console.log(this.state.previous ,"-", rotating)

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
            console.log(this.state.previous ,"-", rotating)

            boxes.forEach(function(element, index) {
                gsap.to(element, {
                  css: {
                    rotationY: ("-=" + pos + "")
                  },
                  repeat: 0, // 20
                });
              });
        }
        console.log(rotating)
        
        this.setState({ previous: rotating })
    }

    componentDidMount(){
        var boxes = document.querySelectorAll(".box")
        var stage = document.querySelector(".stage");
        
        gsap.set(stage, {
          css: {
            perspective: 30000,
            transformStyle: "preserve-3d"
          }
        });
        
        boxes.forEach(function(element, index) {
            console.log(element, index)
            gsap.set(element, {
                css: {
                    rotationY: index * 360 / 6,
                    transformOrigin: "50% 50% -"+window.innerWidth / 2.5
                }
            });
        });
    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div className='overflow-hidden w-100 h-100 d-flex justify-content-around'>
                <div className="demoWrapper d-flex">
                    <div className="stage d-flex justify-content-center align-items-center">
                        <div className="box" style={{filter: this.state.previous === 0 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(0) }>
                            <img src={saveUs} />
                        </div>
                        <div className="box" style={{filter: this.state.previous === 1 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(1) }>
                            <img src={studLp} />
                        </div>
                        <div className="box" style={{filter: this.state.previous === 2 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(2) }>
                            <img src={micro} />
                        </div>
                        <div className="box" style={{filter: this.state.previous === 3 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(3) }> 
                            <img src={micro} />
                        </div>
                        <div className="box" style={{filter: this.state.previous === 4 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(4) }>
                            <img src={micro} />
                        </div>
                        <div className="box" style={{filter: this.state.previous === 5 ? "blur(0px) brightness(1)": "blur(6px) brightness(0.7)", width: this.state.currentWidth / 2.5, height: this.state.currentWidth / 3.75}} onClick={ () => this.rotate(5) }>
                            <img src={studLp}/>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default carousel;
