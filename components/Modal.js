import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ModalC } from 'react-responsive-modal';

const Modal = ({ component, onClose }) => {
    return (
        <div>
            <ModalC open={true} onClose={()=>{onClose()}} center>
                {component}
            </ModalC>
        </div>
    );
}

export default React.memo(Modal);
