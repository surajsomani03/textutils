import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }

    const handleClearclick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success")
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")
    }
    const [text, setText] = useState('');
    // text = "new text"; wrong way to set the state
    // setText("new text"); correct way to set the state
  return (
    <>
    <div className="Container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>

    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743',}}>
        <h1>Your text summery</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        {/* <p> {text.replace(/[ ]+/,'').trim()===''?0:text.replace(/[ ]+/g,' ').trim().split(' ').length} words and {text.length} characters</p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
