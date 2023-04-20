import React, { useContext } from 'react';
import { Menus } from '../../App';

const Navbar = ({filterItems, menuList }) => {

  
    return (
        <div>
            {menuList.map((curElem) => {
            return (
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={()=>filterItems(curElem)}
                
                >{curElem}</button>

            );
          })}
        </div>
    );
};

export default Navbar;