import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const menuItems = [
  {
    title: '메뉴 1',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 2',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 3',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 4',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 5',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 6',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
    ],
  },
  {
    title: '메뉴 7',
    sub_title: [
      { sub_title: '서브메뉴 1' },
      { sub_title: '서브메뉴 2' },
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
                  <ListItemText primary={subItem.sub_title} />
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
            marginTop: 8,
          },
        }}
      >
        <List>{renderMenuItems(menuItems)}</List>
      </Drawer>
    </div>
  );
};

export default AMenu;
