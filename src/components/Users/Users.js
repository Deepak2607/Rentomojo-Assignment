import React, { Component } from 'react';
import axios from 'axios';
import User from "./User";

class Users extends Component{
    
    constructor(){
        super();
        
        this.state={
            users:[],
        }
        
        this.componentDidMount=()=> {
            console.log(this.props);
            axios.get("https://jsonplaceholder.typicode.com/users").then( response=>{
                const users= response.data; 
                console.log(users);
                this.setState({users:users});
            })
        }
    }
    
    
    render(){
            
            return( 
                
                <div className="container">
                <table className="table">
    
                <thead>
                    <tr>
                      <th scope="col">User No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">Blog Posts</th>
                    </tr>
                </thead>
                
                <tbody>
                {this.state.users.map(user =>
                      <User key={user.id} name={user.name} company={user.company} id={user.id} />
               )}
               </tbody>

               </table>
                </div>
            );

     }
     
}

export default Users;