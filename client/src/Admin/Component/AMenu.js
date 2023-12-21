import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    title: 'Menu',
    value: 'menu',
    sub_title: [
      { sub_title: '버거', value: '1'},
      { sub_title: '맥런치', value: '2' },
      { sub_title: '맥모닝', value: '3' },
      { sub_title: '해피스낵', value: '4' },
      { sub_title: '사이드&디저트', value: '5' },
      { sub_title: '맥카페&음료', value: '6' },
      { sub_title: '해피밀', value: '7' },
    ],
  },
  {
    title: 'Store',
    value: 'store',
    sub_title: [
      { sub_title: '매장', value: 'store' },
    ],
  },
  {
    title: 'What\'s New',
    value: 'whats-new',
    sub_title: [
      { sub_title: '프로모션', value: '12' },
      { sub_title: '새로운소식', value: '13' },
      { sub_title: '해피밀', value: '14' },
    ],
  },
  {
    title: 'Story',
    value: 'story',
    sub_title: [
      { sub_title: '크루', value: 'crew' },
      { sub_title: '노력', value: 'effort' },
      { sub_title: '품질', value: 'material' },
    ],
  },
  {
    title: 'Order',
    value: 'order',
    sub_title: [
      { sub_title: '주문관리', value: 'order' },
    ],
  },
  {
    title: 'VisualBackGround',
    value: 'visualBackground',
    sub_title: [
      { sub_title: 'VisualBackGround 관리', value: 'visualbackground' },
    ],
  },
  {
    title: 'Option',
    value: 'option',
    sub_title: [
      { sub_title: 'Option 관리', value: 'option' },
    ],
  },
  {
    title: 'Slider',
    value: 'slider',
    sub_title: [
      { sub_title: 'Slider 관리', value: 'slider' },
    ],
  },
];

const AMenu = () => {
  const [openStates, setOpenStates] = useState(menuItems.map(() => false));

  const handleClick = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const handleSubtitleClick = (event, index, subIndex) => {
    event.stopPropagation();
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <div key={index}>
        <ListItem button onClick={() => handleClick(index)} sx={{ pl: item.sub_title ? 0 : 4 }}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <DraftsIcon />}</ListItemIcon>
          <ListItemText primary={item.title} />
          {item.sub_title && (openStates[index] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {item.sub_title && (
          <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.sub_title.map((subItem, subIndex) => (
                <ListItem
                  button
                  key={subIndex}
                  sx={{ pl: 4 }}
                  onClick={(event) => handleSubtitleClick(event, index, subIndex)}
                >
                  <ListItemIcon>
                    {subIndex % 2 === 0 ? <InboxIcon /> : <DraftsIcon />}
                  </ListItemIcon>
                  <NavLink to={`/adminmain/${item.value}/${subItem.value}`}>
                    <ListItemText primary={subItem.sub_title} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: 13,
          
          },
        }}
      >
        <List>{renderMenuItems(menuItems)}</List>
      </Drawer>
    </div>
  );
};

export default AMenu;
