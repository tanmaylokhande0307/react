import React from 'react'

const Header = ({theme}) => {
  return (
    <div className='padT4 padB4'>
        <div className="container mobile-container">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="/images/SVCClogo.png" alt="" />
                </div>
                <div className="light">
                    <h4 className='header-title'>
                        Zasm Labs
                    </h4>
                </div>
                <div className={theme === 'light' ? "" : "text-info"}>
                    Hello Mr. Smith &nbsp;&nbsp;
                    <span>
                        <a href="#">Sign-Out</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
