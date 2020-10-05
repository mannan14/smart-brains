  
import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='outer-box'>
          <input className='text f4 center' type='text' onChange={onInputChange}/>
          <button
            className='button w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;