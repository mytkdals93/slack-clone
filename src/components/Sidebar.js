import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import { BookmarkBorder, Drafts, InsertComment, PeopleAlt, FileCopy, ExpandLess, Inbox, ExpandMore } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import { SidebarOption } from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        sangmin
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Threads"/>
            <SidebarOption Icon={Inbox} title="Menteions & reactions"/>
            <SidebarOption Icon={Drafts} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File browser"/>
            <SidebarOption Icon={ExpandLess} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Channel"/>
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.nav`
    background-color: var(--slack-color);
    color:white;
    flex:0.3;
    padding-top:70px;
    > hr{
        margin:10px 0;
        border:1px solid #49274b;
    }
`
const SidebarHeader = styled.div`
    display:flex;
    border-top: 1px solid #49274b;
    border-bottom: 1px solid #49274b;
    padding:13px;
    align-items:center;
    > .MuiSvgIcon-root{
        border-radius:50%;
        font-size:1rem;
        color: #49274b;
        background-color:white;
        padding:7px;
    }

`
const SidebarInfo = styled.div`
    flex:1;
    > h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    > h3{
        display:flex;
        font-size:.9rem;
        font-weight:500;
        align-content:center;
     > .MuiSvgIcon-root{
         height:100%;
        color:green;
     }
    }
`