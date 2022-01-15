import React from "react";

const Comments = () => {
  return (
    <div className="commentWrapper">
        <h4>댓글</h4>
        
        <div className="commentWriter">
            <textarea name="write" placeholder="대충 내용을 입력하세요" id="comment_input_text"></textarea>
            <input type="button" value="댓글 작성" id="comment_submit_button" />
        </div>
    </div>
  )
}

export default Comments;