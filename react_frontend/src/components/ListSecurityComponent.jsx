import React, { Component } from 'react';
import SecurityService from '../services/SecurityService';

class ListSecurityComponent extends Component {
   constructor(props) {
      super(props)

      this.state = {
         securities: []
      }
      this.addSecurity = this.addSecurity.bind(this);
      this.editSecuritity = this.editSecuritity.bind(this);
      this.deleteSecuritity = this.deleteSecuritity.bind(this);
   }

   deleteSecuritity(id){
         SecurityService.deleteSecurity(id).then( res => {
            this.setState({securities: this.state.securities.filter(security => security.id !== id)});
         });
   }

   editSecuritity(id) {
      this.props.history.push(`/add-security/${id}`);
   }

   componentDidMount() { 
      SecurityService.getSeucrities().then((res) => {
         this.setState({ securities: res.data });
      });
   }

   addSecurity() {
      this.props.history.push('/add-security/_add');

   }

   render() {
      return (
         <div>
            <h2 className="text-center">Securities List</h2>
            <div className="row">
               <button className="btn btn-primary" onClick={this.addSecurity}>Add Security</button>
            </div>
            <div className="row">
               <table className="table table-striped table-bordered">
                  <thead>
                     <tr>
                        <th>Date</th>
                        <th>Securities Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        this.state.securities.map(
                           security =>
                              <tr key={security.id}>
                                 <td>{security.date}</td>
                                 <td>{security.name}</td>
                                 <td>{security.price}</td>
                                 <td>
                                    <button onClick={() => this.editSecuritity(security.id)} className="btn btn-info">Edit</button>
                                    <button onClick={() => this.deleteSecuritity(security.id)} style={{ marginLeft: "5px" }} className="btn btn-danger">Delete</button>
                                 </td>
                              </tr>
                        )
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default ListSecurityComponent;