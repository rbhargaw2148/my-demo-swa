import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ProposedAcknowledgementModal from '../proposedSaleReport/acknowledgementModal'
import ProposedSaleContextModal from '../proposedSaleReport/proposedSaleContextModal'
import FinalAcknowledgementModal from '../finalSaleReport/acknowledgementModal'
import { reportProposedSalePath, reportFinalSalePath } from '../../Routes'


const SidebarLink = styled(Link)`
  display: flex;
  color: #3d4e7a;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
//    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #3d4e7a;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, showSidebar}) => {
  const [subnav, setSubnav] = useState(false);
  //const [subsubnav, setSubSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  //const showSubSubnav = () => setSubSubnav(!subsubnav);

  const history = useHistory()
  //const {pathname} = useLocation()
  const [selectedPath, setSelectedPath] = useState('');
  const [showAknowledgeModal, setShowAknowledgeModal] = useState(false);
  const [showContextModal, setShowContextModal] = useState(false);
  const handleClick = (e, path) => {
        e.preventDefault();
        showSidebar();
        if(path === '/dashboard/report-proposed-sale'){
            setSelectedPath(path);
            setShowContextModal(true);
        } else if(path === '/dashboard/report-final-sale'){
          setSelectedPath(path);
          setShowAknowledgeModal(true);
        } else {
            history.push(path);
        }
  }
  const onRPDIContextClose = () =>{
    setShowContextModal(false);
    setShowAknowledgeModal(true);
  }


  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          // if( item.subNav ) {
          //   return (<>
          //     <SidebarLink to={item.path} onClick={item.subsubNav && showSubSubnav}>
          //       <div>
          //         {item.icon}
          //         <SidebarLabel>{item.title}</SidebarLabel>
          //       </div>
          //       <div>
          //         {item.subNav && subsubnav
          //           ? item.iconOpened
          //           : item.subNav
          //           ? item.iconClosed
          //           : null}
          //       </div>
          //     </SidebarLink>
          //     {subsubnav &&
          //       item.subNav.map((item, index) => {
          //         return(<DropdownLink to={item.path} key={"s"+index} onClick={(e)=>handleClick(e,item.path)}>
          //           <SidebarLabel>{item.title}</SidebarLabel>
          //         </DropdownLink>)
          //       })
          //     }
          //     </>
          //   )
          // }
          return (
            <DropdownLink to={item.path} key={index} onClick={(e)=>handleClick(e,item.path)}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}

      {showContextModal &&  (selectedPath === reportProposedSalePath ) && <ProposedSaleContextModal onModalClose={()=>onRPDIContextClose()}/>}
      {showAknowledgeModal &&  (selectedPath === reportProposedSalePath ) && <ProposedAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>}
      {showAknowledgeModal &&  (selectedPath === reportFinalSalePath ) && <FinalAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>}

    </>
  );
};

export default SubMenu;