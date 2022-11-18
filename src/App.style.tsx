import styled from '@emotion/styled';
import { theme } from './style/theme';
import Grid from '@mui/material/Grid';

export const NavBar = styled('div')`
  background: ${theme.palette.background.paper};
  display: flex;
  position: relative;
  padding: 0rem 1rem;

  font-size: 40px;
  text-align: center;
  font-weight: 600;
`;

export const CenterGrid = styled(Grid)`
  width: 100%;
  justify-content: center;
`;

export const NavBot = styled('div')`
  position: relative;
  margin: 5rem 0rem;

  text-align: center;
  font-weight: 600;

  color: white;
  transition: 0.2s;

  &:hover {
    color: ${theme.palette.primary.main};
  }
`;
