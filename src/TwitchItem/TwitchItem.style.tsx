import styled from '@emotion/styled';
import { theme } from '../style/theme';

export const LiveHandler = styled('div')`
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95, 0.95);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    & h4 {
      transition: 0.2s;
      color: ${theme.palette.primary.light};
    }
    & iframe {
      transition: 0.2s;
      border-bottom: 4px solid ${theme.palette.primary.main};
    }
  }
`;

export const LiveWrapper = styled('div')`
  background: ${theme.palette.background.paper};
  flex-direction: column;
  padding: 1rem 1.25rem;
`;

export const CustomIframe = styled('iframe')`
  height: 300px;
  width: auto;
  background: ${theme.palette.background.dark};
  border-top: 5px solid ${theme.palette.background.paper};
  border-left: 5px solid ${theme.palette.background.paper};
  border-right: 5px solid ${theme.palette.background.paper};
  border-bottom: 4px solid ${theme.palette.primary.gray};
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  pointer-events: none;
`;
