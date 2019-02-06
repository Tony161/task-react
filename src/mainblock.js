import React from 'react';

const MainBlock = (props) => {
  return (
    <div className="main-block">
      <div className="block-item">
        <img src="1.jpg" alt="lan" height="500" />
      </div>
      <div className="photo-item">
        <div className="grid-item image">
          <img src="1.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item">
          <img src="2.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item">
          <img src="3.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item">
          <img src="4.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item">
          <img src="5.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item">
          <img src="6.jpg" alt="lan" height="150" width="170" />
        </div>
        <div className="grid-item image">
          <img src="7.jpg" alt="lan" height="150" width="170" />
        </div>
      </div>
      <div className="block-item last-row">
        <div className="twins"></div>
        <div className="twins">ony161</div>
      </div>
    </div>
  );
}

export default MainBlock;
