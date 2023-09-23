
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Image';
import Price from './Price';
import Dex from './Dex';
import Name from './Name';
import Data from './Product'
import {  Card } from 'react-bootstrap';
function App() {

  let firstName=Data.Name
  return (
    <div className="App">
     

      <div className=''>
      <Card style={{ width: '18rem' }}>
    
        <Card.Body>
         <Image/> 
          <Card.Title> <Name/> </Card.Title>
          <Card.Text>
          <Dex/>
          </Card.Text>

          <Price/>
         {firstName?`Hello ${firstName} `:'hello there!'}
        </Card.Body>
       </Card>
       
      </div>


    </div>
  );
}

export default App;
