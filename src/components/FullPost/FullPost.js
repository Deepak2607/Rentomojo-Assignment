import React, { Component } from 'react';
import axios from 'axios';
import PostComments from "../Comments/PostComments";
import './FullPost.css';
import {Route} from 'react-router-dom';

class FullPost extends Component {
    
    constructor(){
        super();
        
        this.state={
            loadedPost:{},
            showComments:false,
            render: false 
        }
        
        this.componentDidMount=()=> {
            
            setTimeout(() => { 
              this.setState({render: true})
            }, 700)
    
            console.log(this.props);
            if(this.props.match.params.id){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
                    .then(response=> { 

                            console.log(response);                
                            this.setState({
                                loadedPost:response.data
                            })     
                    })
            }
        }
        
        this.deletePost=()=> {
            axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
            .then(response=>{
                console.log(response);
                this.props.history.push(`/users/${this.props.match.params.user_id}`);
//                this.props.history.goBack();
            }
          )
        }
        
        this.toggleComments=()=>{ 
            this.setState(
                { showComments: !this.state.showComments}
            )
        }    
        
    }
    
    
    render () {
        
        let postId= this.props.match.params.id;
        let comments= null;
        let text= "Show Comments";
        if(this.state.showComments==true){
            text= "Hide Comments";
            comments=(
                <PostComments postId={postId}/>
            )
        }
        
           
        if(this.state.render==false){
            return <h3>loading...</h3>
        }else{
            return(
                <div>
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p style={{fontSize:"20px"}}>{this.state.loadedPost.body}</p>
                    
                    <button type="button" className="btn btn-danger" onClick={this.deletePost}>delete</button>
                    &emsp;
                    <button type="button" className="btn btn-success" onClick={this.toggleComments}>{text}</button>
                    
                </div>
                <br/><br/>
                {comments}
                
                </div>
            );
        }     
    }
}

export default FullPost;