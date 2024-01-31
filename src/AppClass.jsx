import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const images= this.imageData()

    return(
      <div>
        <div>
          <h1 id="heading">Kalvium Gallery (Class)</h1>
        </div>
        <div id="image-container">
          {images.map((e)=>(
            <img key={e.id} src={e.img} alt="" />
          ))}
        </div>

      </div>
    )
  }
}