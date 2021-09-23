// import {useLocation, useHistory, Link } from 'react-router-dom'
// import {useState} from 'react'
// import './Sidebar.css'
// import {SidebarData} from './SidebarData'
// import AcknowledgementModal from '../proposedSaleReport/acknowledgementModal'

// const Sidebar = () => {
//     const history = useHistory()
//     const {pathname} = useLocation()
//     const [showProposedAknowledgeModal, setShowProposedAknowledgeModal] = useState(false);
//     const handleClick = (e, path) => {
//         e.preventDefault();
//         if(path === '/dashboard/report-proposed-sale'){
//             setShowProposedAknowledgeModal(true);
//         } else {
//             history.push(path);
//         }
//     }
//     return (
//         <>
//         <div className="sidebar">
//             <ul className="sidebarList">
//             {SidebarData.map((item, index)=>{
//                 return(

//                     <li 
//                       key={index} 
//                       className="row"
//                       data-s={pathname}
//                       data-p={item.path}
//                       id={pathname.indexOf(item.path) > -1 ? "active" : ""}
//                       >
//                         <Link to={item.path} onClick={(e)=>handleClick(e,item.path)}>{item.title}</Link>
//                     </li>
//                 )
//             })
//         }
//             </ul>
//         </div>
//         {showProposedAknowledgeModal && <AcknowledgementModal onModalClose={()=>setShowProposedAknowledgeModal(false)}/>}
//         </>
//     )
// }

// export default Sidebar


import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData, NavbarTabsData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
// import ProposedAcknowledgementModal from '../proposedSaleReport/acknowledgementModal'
// import ProposedSaleContextModal from '../proposedSaleReport/proposedSaleContextModal'
// import FinalAcknowledgementModal from '../finalSaleReport/acknowledgementModal'
// import { reportProposedSalePath, reportFinalSalePath } from '../../Routes'
import SubMenu from './SubMenu'

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  // const history = useHistory()
  const {pathname} = useLocation()
  // const [selectedPath, setSelectedPath] = useState('');
  // const [showAknowledgeModal, setShowAknowledgeModal] = useState(false);
  // const [showContextModal, setShowContextModal] = useState(false);
  // const handleClick = (e, path) => {
  //       e.preventDefault();
  //       if(path === '/dashboard/report-proposed-sale'){
  //           setSelectedPath(path);
  //           setShowContextModal(true);
  //       } else if(path === '/dashboard/report-final-sale'){
  //         setSelectedPath(path);
  //         setShowAknowledgeModal(true);
  //       } else {
  //           history.push(path);
  //       }
  // }
  // const onRPDIContextClose = () =>{
  //   setShowContextModal(false);
  //   setShowAknowledgeModal(true);
  // }
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sub-header'>
          <div className="container">
          <div className="dflex container-xl">
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <ul className="navbar-tabs flex-row">
            {NavbarTabsData.map((tab, index) => {
              return (
                // <div>
                <li key={index} className="nav-item" id={pathname.indexOf(tab.path) > -1 ? "activetab" : ""}>
                  <Link to={tab.path}>
                    <span>{tab.title}</span>
                  </Link>
                </li>
              );
              })
            }
            </ul>
          </div>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className="nav-menu-items" style={{width: '100%'}}>
              <Link to='#' className='menu-bars-close'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
              </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} showSidebar={showSidebar}/>
            })}
          </div>
        </nav>
      </IconContext.Provider>
      {/* {showContextModal &&  (selectedPath === reportProposedSalePath ) && <ProposedSaleContextModal onModalClose={()=>onRPDIContextClose()}/>}
      {showAknowledgeModal &&  (selectedPath === reportProposedSalePath ) && <ProposedAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>}
      {showAknowledgeModal &&  (selectedPath === reportFinalSalePath ) && <FinalAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>} */}

    </>
  );
}

export default Sidebar;