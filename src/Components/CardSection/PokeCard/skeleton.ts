import styled from "styled-components";

export const PokeCardSkeleton = styled.li`
  background: ${props => props.theme.colors.secondary};
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  border-radius: 20px;

  width: 240px;
  height: 364px;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

export const SkeletonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`