import React, {useState} from 'react'

export default function TextForm(props){
  let[text, setText] = useState("");
  let[email, setEmail] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [showtable, setShowtable] = useState(false);
  const handleOnChange = (event)=> {
    let newText = event.target.value;
    setText(newText);

    let count = 0;
    let inWord = false;
    for(let i = 0; i < newText.length; i++) {
        if (text[i] !== ' ') {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    setWordCount(count);
  }
  
  const handleUpClick = ()=> {
    setText(text.toUpperCase())
    props.showAlert("Converted into UpperCase", "success");
    
  }
  
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted into LowerCase", "success");
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Text Clear", "success");
  }

  function extractEmails () {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setEmail(emails || []);
    if(emails){
      setShowtable(true);
    }
    else{
      setShowtable(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
  }
 
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  // When you're setting up a dark mode for tables, using a variable means you don't have to repeat the code everywhere. Just use the variable instead.
  let k =  {backgroundColor:props.mode === 'dark'?'#586090':'white', color:props.mode === 'dark'?'white':'black'}


  return (
    <>
      <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
          <h3>{props.heading}</h3>
          <textarea className="form-control my-2 my-2" style={{backgroundColor:props.mode === 'dark'?'#586090':'white', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleUpClick}>Convet to Uppercase</button>
          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleLoClick}>Convert to LowerCase</button>
          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleClear}>ClearText</button>
          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Space</button>
          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
          <button  className="btn btn-primary mx-2 my-2" disabled={text.length === 0} value = "email" onClick={extractEmails}>Extract Email</button>
      </div>
      <br />
      <div className="container " style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>Need time to read : {0.008 * text.split(' ').length} minute </p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here." }</p>
  

        {
          showtable && (
            <div className="container">
              <h6>Emails: </h6>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={k}>#</th>
                    <th scope="col" style={k}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {email.map((email, index) => (
                    <tr>
                      <th  scope="row" style={k} >{index + 1} </th>
                      <td key={index} style={k} >{email}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
          )
        }
        
        
      </div>
    
    </>
  )
}

