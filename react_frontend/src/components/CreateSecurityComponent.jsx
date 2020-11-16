import React, { Component } from 'react';
import SecurityService from '../services/SecurityService';

class CreateSecurityComponent extends Component {
   constructor(props) {
      super(props)
      this.state = {
         id: this.props.match.params.id,
         date: '',
         name: '',
         price: ''
      }
      this.changeDateHandler = this.changeDateHandler.bind(this);
      this.changeNameHandler = this.changeNameHandler.bind(this);
      this.changePriceHandler = this.changePriceHandler.bind(this);
      this.saveOrUpdateSecurity = this.saveOrUpdateSecurity.bind(this);
      
   }

   componentDidMount() {

      if (this.state.id === "_add") {
         return
      } else {
         SecurityService.getSecurityById(this.state.id).then((res) => {
            let security = res.data;
            this.setState({
               date: security.date,
               name: security.name,
               price: security.price
            });
         });
      }
   }

   saveOrUpdateSecurity = (e) => {
      e.preventDefault();

      let security = { date: this.state.date, name: this.state.name, price: this.state.price };
      console.log('security =>' + JSON.stringify(security));

      if (this.state.id === "_add") {
         SecurityService.createSecurity(security).then(res => {
            this.props.history.push('/securities');
         });
      } else {
         SecurityService.updateSecurity(security, this.state.id).then(res => {
            this.props.history.push('/securities');
         });
      }
   }

   changeDateHandler = (event) => {
      this.setState({ date: event.target.value });
   }

   changeNameHandler = (event) => {
      this.setState({ name: event.target.value });
   }

   changePriceHandler = (event) => {
      this.setState({ price: event.target.value });
   }

   cancel() {
      this.props.history.push('/securities');
   }

   getTitle() {
      if (this.state.id === "_add") {
         return <h3 className="text-center">Add security</h3>
      } else {
         return <h3 className="text-center">Update security</h3>
      }
   }

   render() {
      return (
         <div>
            <div class="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                     {
                        this.getTitle()
                     }
                     <div className="card-body">
                        <form>
                           <div className="form-group">
                              <label>Date</label>
                              <input type="date" placeholder="yyyy-mm-dd" name="date" className="form-control" value={this.state.date} onChange={this.changeDateHandler} />
                           </div>
                           <div className="form-group">
                              <label>Name</label>
                              <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                           </div>
                           <div className="form-group">
                              <label>Price</label>
                              <input type="number" placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler} />
                           </div>

                           <button className="btn btn-success" onClick={this.saveOrUpdateSecurity}>Save</button>
                           <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      );
   }
}

export default CreateSecurityComponent;

