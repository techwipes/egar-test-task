import React, { Component } from 'react';

class FooterComponent extends Component {
   constructor(props) {
      super(props)

      this.state = {
      }
   }

   render() {
      return (
         <div>
            <footer className="footer">
               <span className="text-muted">2020 Created by Baturin Dmitriy</span>
            </footer>
         </div>
      );
   }
}

export default FooterComponent;

