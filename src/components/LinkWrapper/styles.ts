import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color ease-out.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
