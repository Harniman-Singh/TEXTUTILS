import React, {useState} from 'react'

export default function TextFormH(props) {
    const handleUpClick=()=>{
        // console.log('Uppercase was clicked'+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!!","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!!","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!!!","success");
    }
    const handleCopy=()=>{
       let text = document.getElementById('myBox');
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard!!!","success");
       
    }
    const handleExtraSpaces=()=>{
       let newText= text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra spaces removed!!!","success");
    }
    const handleOnChange=(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text="absd"; //wrong way to change 
    // setText("hobby"); //corrrect way to change
return (
    <>
        <div className="container" style={{color:props.mode==='dark' ?  'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example text area</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ?  'grey':'white' , color:props.mode==='dark' ?  'white':'#042743' }} id="myBox" rows="8"></textarea>
            </div>
        <button className="disabled={text.length===0}  btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        
        <button className="disabled={text.length===0}  btn btn-primary mx-1  my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="disabled={text.length===0}  btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="disabled={text.length===0}  btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
        <button className="disabled={text.length===0}  btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Sapces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark' ?  'white':'#042743'}}>
            <h2>Your text sumary</h2>
            <p>{text==="" ? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{text===""?0 : 0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0  ? text :'Enter something in the textbox above to preview it here'}</p>
        </div>

    </>
)
}

