import React from 'react'

function FooterMenuList({list}) {
      return (
        <div >
          <ul className="footerMenuList">
            {list.map((item, index) => {
              return <li className="footerList" key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      );
}

export default FooterMenuList