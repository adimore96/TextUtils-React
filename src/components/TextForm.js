import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase!", "success");

    } 
    const handleLoClick = () => {
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!", "success");
    } 
    const handleClearClick = () => {
         let newText = "";
         setText(newText);
         props.showAlert("Text Cleared!", "success");
    } 
    const handleCopy = () => {
         var text = document.getElementById("myBox");
         text.select()
         navigator.clipboard.writeText(text.value);
         props.showAlert("Text Copied!", "success");
    } 
    const handleExtraSpaces = () => {
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "));
         props.showAlert("Extra spaces are removed!", "success");
    } 
    const handleOnChange = (event) => {
        setText(event.target.value)

   } 
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  placeholder='Enter the text' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white',
            color:  props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 mt-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={handleExtraSpaces}>rm extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Privew</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview"}</p>
        </div>
        </>
    )
}
