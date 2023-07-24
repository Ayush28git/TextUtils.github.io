import React, { useState } from "react";

export default function Body(props) {
    const[Text,setText] = useState("");
    const HandleOnChange = (e)=>{
        setText(e.target.value);
    }
    const HandleUpClick = ()=>{
        let NewText = Text.toUpperCase();
        setText(NewText);
        if(Text.length !==0)
      {props.showalert("Converted to upperCase","success");}
      else{
        props.showalert("Enter Something to convert","danger");
      }

    }
    const HandleLoClick = ()=>{
        let NewText = Text.toLowerCase();
        setText(NewText);
        if(Text.length !==0)
      {props.showalert("Converted to lowerCase","success");}
      else{
        props.showalert("Enter Something to convert","danger");
      }


    }
    const HandleClrClick = ()=>{
      setText("");
      props.showalert("cleared","success");
    }
    const HandleCpyClick = ()=>{
      navigator.clipboard.writeText(Text);
      if(Text.length !==0)
      {props.showalert("copied","success");}
      else{
        props.showalert("Enter Something to copy","danger");
      }
    }
  return (
    <div className="container my-3">
      <h1 style={{ color: props.Mode === "dark" ? "white" : "black" }}>
        TEXTUTILS-MODIFY YOUR TEXT HERE
      </h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        </label>
        <textarea
        value={Text}
          className="form-control"
          style={{border: props.Mode === "dark" ? "2px solid white" : "2px solid black", backgroundColor:props.Mode === "dark" ? "black" : "white",color :props.Mode === "dark" ? "white" : "black"}}
          onChange={HandleOnChange}
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleLoClick}>LowerCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleClrClick}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleCpyClick}>Copy Text</button>
      <div  style={{color :props.Mode === "dark" ? "white" : "black"}}>
      <h2 className="my-2" >Text-Summary</h2>
      <div>Your text Contains : {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</div>
      <div>your text : {Text}</div>
      <div>{(Text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*(1/200)} min read</div>
      </div>
    </div>
  );
}
