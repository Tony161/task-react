import React from 'react';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div className="col-sm-4">
        <a href="https://wfts.su/profile/Тони161">Тони161</a>
      </div>
      <div className="col-sm-4">
        <a href="https://wfts.su/pvp/Тони161">PvP</a> и <a href="https://wfts.su/pve/Тони161">PvE</a> показатели | <a
          href="https://wfts.su/weapons/Тони161">оружие</a>,
        <a href="https://wfts.su/achievements/Тони161">достижения</a>
      </div>
      <div className="col-sm-4">
        <div className="d-flex flex-column">
          <div>
            <button type="button" className="btn btn-primary">
              VK
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-outline-danger">
              YouTube
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
