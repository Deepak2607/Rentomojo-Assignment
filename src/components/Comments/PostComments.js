import React, { Component } from 'react';
import Comment from './Comment';
import axios from 'axios';

class PostComments extends Component{
    
    constructor(){
        super();
        
        this.state={
            comments:[],
            postId:null
        }
        
        this.componentDidMount=()=> {
            
            axios.get("https://jsonplaceholder.typicode.com/comments/?postId="+ this.props.postId).then( response=>{
                const comments= response.data;
                console.log(response.data);
                this.setState({comments:comments,postId:this.props.postId});
            })
        }       
    }
    
    
    render(){
    
        if(this.state.postId==null){
            return <h3>loading...</h3>
        }else{
            return( 
                <div>
                <h3 align="center" style={{color: "brown" }}>Post No. {this.state.postId} Comments</h3>
                {this.state.comments.map(comment =>{
                 return(
                 <Comment key={comment.id} name={comment.name} body={comment.body} id={comment.id} PostId={this.state.postId} />                       
                 )})}
                </div>
            );
        } 
             
     }    
}

export default PostComments;