import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import Navbar from './Navbar';
import { Menus } from '../../App';
// import MenuData from '../../../public/menu.json'




const Home = () => {

    const menuData = useContext(Menus)

    const uniqueList = [
        ...new Set(
            menuData.map((curElem) => {
            return curElem.category;
          })
        ),
        "All",
      ];

      
    const [menu,setMenu]=useState(menuData)
    const [menuList , setMenuList] = useState(uniqueList)


    const filterItems = (category)=>{
        if (category == "All"){
            setMenu(menuData)
            return
        }
   
    const updatedList = menuData.filter(curEl =>{
        return curEl.category == category
    });

        setMenu(updatedList)
        
    }


    return (
        <>
        <Navbar   filterItems={filterItems}  menuList={menuList} />
        <Menu menu={menu}   />
        
        
        </>
    );
};

export default Home;