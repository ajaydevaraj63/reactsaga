import React from 'react';
import Chatbot from './Chatbot';
import FileEdit from '../Filupload.js/FileEdit';


const ChatbotUi = () => {
  return (
 <div>

<div className='bg' >  
    
    <div class="row d-flex justify-content-sm-around align-items-center  " style={{ backgroundColor: '#ffff' }} >

      <div class="row d-flex justify-align-content-lg-arround align-items-center h-100">
        <ul class="nav nav-pills mt-2 d-flex  justify-content-evenly p-lg-1" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
           
      {/* <Chatbot /> */}
         <FileEdit/>

           
          </li>


        </ul>
      </div>

    </div>
     
    </div> 


{/* <Chatbot /> */}

    </div>

)
}

export default ChatbotUi