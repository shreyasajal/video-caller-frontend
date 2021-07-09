import React from 'react';
import { acceptIncomingCallRequest, rejectIncomingCallRequest } from '../../../utils/webRTC/webRTCHandler';
import { MdCallEnd } from 'react-icons/md';
import {MdPhoneInTalk} from 'react-icons/md';
import './IncomingCallDialog.css';
const styles = {
  buttonContainer: {
    marginTop: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    border: '2px solid #e6e5e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const IncomingCallDialog = ({ callerUsername }) => {
  const handleAcceptButtonPressed = () => {
    acceptIncomingCallRequest();
  };

  const handleRejectButtonPressed = () => {
    rejectIncomingCallRequest();
  };

  return (
    <div className='direct_call_dialog background_secondary_color'>
      <span className='direct_call_dialog_caller_name'>{callerUsername} Calling..</span>
      <div className='direct_call_dialog_button_container'>
        <div style={styles.buttonContainer} onClick={handleAcceptButtonPressed}>
        <MdPhoneInTalk style={{ width: '20px', height: '20px', fill: '#00FF00'}} />
        </div>
      <div style={styles.buttonContainer} onClick={handleRejectButtonPressed}>
        <MdCallEnd style={{ width: '20px', height: '20px', fill: '#F2556A'}} />
       </div>
      </div>
    </div>
  );
};

export default IncomingCallDialog;
