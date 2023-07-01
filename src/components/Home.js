import React, { Component } from "react";
import "../styles/Home.css"
import "particles.js";
import particleJSON from "../assets/particlesjs-config.json";
import {ReactComponent as Github} from "../assets/github.svg";
import {ReactComponent as LogoIcon} from "../assets/algo.svg";

class Home extends Component{
    constructor(){
        super();
        this.state={
            problems:[
                {
                    name:"Sorting",
                    imgUrl:"https://cdn.sanity.io/images/599r6htc/localized/5ad851c14fe712b1789e645bf5f187c1ea9679f2-1108x1108.png?w=514&h=514&q=75&fit=max&auto=format",
                    link:"/sorting"
                    
                },
                {
                    name:"Pathfinding",
                    imgUrl:"https://repository-images.githubusercontent.com/336819274/da6f5200-9bd5-11eb-96e7-0ab03194a680",
                    link:"/pathfind"
                },
                {
                    name:"ConvexHull",
                    imgUrl:"https://gogulilango.com/images/software/gesture-recognition/convex-hull.jpg",
                    link:"/convexhull"
                }
            ]
        }
    }
    componentDidMount(){
        window.particlesJS("particles-js",particleJSON );
    }
    render(){
        return(
            <div className="back">
                <div id="particles-js"></div>
              <div class="box title">
                    <div className="container-fluid solid">
                        <ul className="links">
                            <li onClick={()=>window.open("https://github.com/Prit33/Algorithm-Visualizer","_blank")}>
                                <i>
                                    <Github/>
                                </i>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                    
                <h1 className="main-title center">
                            ALGORITHM 
                            <strong style={{color:"var(--home-color)"}}> VISUALIZER </strong>
                            <div className="logo">
                            <LogoIcon/>
                            </div>
                            
                </h1>
                <div>
                    <p className="description-title center">
                    Algorithm Visualizer is an interactive platform that visually represents sorting, pathfinding
                    and convex hull algorithms, with more to come soon !
                    </p>
                </div>
                <ul class="list-inline mt-5" style={{display:"block",position:"relative"}}>
                    {this.state.problems.map(element=>
                        <li className="list-inline-item ml-5 mr-5 mb-2" style={{cursor:"pointer"}} onClick={()=>window.location.href=element.link}>
                        <div className="card" style={{width: "14rem"}}>
                            <img className="card-img-top img algo-image" src={element.imgUrl} alt="Card image cap"/>
                            <div style ={{backgroundColor:"transparent"}} className="card-body">
                                <h3 className="card-text algo-name">{element.name}</h3>
                            </div>
                        </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default Home;