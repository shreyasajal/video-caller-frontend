import React from 'react';

import './DashboardInformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {username}!
      </span>
      <span className='dashboard_info_text_description'>
        Directly call any active user
        /Create a Room
        /Join any active rooms
      </span>
    </div>
  );
};

export default DashboardInformation;
