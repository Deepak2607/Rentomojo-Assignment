import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class UserPosts extends Component{
    
    constructor(){
        super();
        
        this.state={
            posts:[],
            userId:null
        }
        
        this.componentDidMount=()=> {
            console.log(this.props);
            

            axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+ this.props.match.params.user_id).then( response=>{
                const posts= response.data;
                console.log(response.data);
                this.setState({posts:posts,userId:this.props.match.params.user_id});
            })
        }
    
        
        this.clickedPost=(id)=>{
            this.props.history.push(`/users/${this.props.match.params.user_id}/${id}`);
        }
        
    }
    
    
    render(){
    
        if(this.state.userId==null){
            return <h3>loading...</h3>
        }else{
            return( 
                <div>
                <h3 align="center" style={{color: "brown" }}>User No. {this.state.userId} Posts</h3>
                {this.state.posts.map(post =>{
                 return(
                 <Post key={post.id} title={post.title} body={post.body} id={post.id} userId={this.state.userId} clicked={()=> this.clickedPost(post.id)}/>                       
                 )})}
                </div>
            );
        }       
     }    
}

export default UserPosts;