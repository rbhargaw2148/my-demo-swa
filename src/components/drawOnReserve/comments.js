import { useState } from 'react'
import Card from '../ui/Card'
import { Button } from 'react-bootstrap'
const Comments = (props) => {
    const [count, setCount] = useState(0);
    const [bgcolor, setBgcolor] = useState('yellowgreen');
    const [commentCounter, setCommentCounter] = useState(0);
    const [commentValue, setCommentValue] = useState("");
    const [comments, setComments] = useState([])
    const setCommentLine = (e) => {
        const commts = [...comments, {commentId:commentCounter, text: commentValue}];
        setComments(commts);
        setCommentValue("");
        console.log(comments)
    }
    const submitCommentLine = (e) => {
        e.preventDefault();
        setCommentCounter(commentCounter+1)
        setCommentLine(e);
    };
    
    // const enterCommentLine = (e) => {
    //     // if (e.charCode === 13) {
    //     // setCommentLine();
    //     // }
    // };
    const handleCommentValue = (e) => {
        setCount(e.target.value.length);
        const color = (e.target.value.length === 4000) ? 'orangered' : 'yellowgreen';
        setBgcolor(color);
        setCommentValue(e.target.value);
    };
    const enableCommentButton = () => {
        return (commentValue ? false : true);
    }
    const changeCommentButtonStyle = () => {
        return (commentValue ? "comments-button-enabled" : 
        "comments-button-disabled");
    }

    const validateForm = (e) => {
        props.openWidget('review');
    }
    return (
        <Card>
            <div className="form">
                <h3>Comments</h3>
                <div className="comments-box">
                    <div>
                        <ul style={{listStyleType: 'none'}}>
                        {comments.map((comment, index) => {
                            return (<li key={index}>{comment.text}<hr/></li>)
                        })}
                        </ul>
                    </div>

                    <textarea name="comment" value={commentValue} 
                    id="comments-input" onChange={handleCommentValue}
                     className="form-control" rows="5" maxLength="4000" placeholder="Add a comment..."/>
                     <span style={{position: 'relative', left: '45%' , backgroundColor: bgcolor }}>{count} out of 4000 max</span>

                    <div style={{overflow: 'auto', paddingTop: '10px'}}>
                    <button onClick={submitCommentLine} type="submit" className="fright" id={changeCommentButtonStyle()}
                    disabled={enableCommentButton()}>Save</button>
                    </div> 
                    

                   
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>  
        </Card>
    )
}

export default Comments
