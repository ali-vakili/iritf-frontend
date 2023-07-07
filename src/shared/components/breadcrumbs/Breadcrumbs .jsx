import * as React from 'react';
import { Link } from "react-router-dom"
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import "./Breadcrumb.scss"

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.grey[100]
  const hoveFocusColor = "#66BCA9"
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(hoveFocusColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(hoveFocusColor, 0.12),
    },
  };
});


export default function BreadcrumbsCustom({ label, path, children }) {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to={"/"}
          label="خانه"
          icon={<HomeIcon fontSize="small" />}
        />
        {children && children.props.children ? children.props.children.map((child) => (child)) : children}
      </Breadcrumbs>
    </div>
  );
}

export {StyledBreadcrumb}