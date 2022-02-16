import React from "react";
import Responce from "./BlogResponce";


//type commentProps = {comment:string}

function BlogPost (){

    const comment  ="Well done";

    return (
        <div>
            <h1>Blog Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium culpa non, saepe vero fugit nulla quisquam deleniti dicta rerum odio quos! Hic provident dolorum laboriosam vero? Ipsam, doloremque et?</p>
            <Responce comment={comment}/>
           
        </div>
    )
}

export default BlogPost;