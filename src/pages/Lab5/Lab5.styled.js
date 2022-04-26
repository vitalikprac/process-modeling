import { Form as FormAntd } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1rem;
`;

export const Result = styled.div`
  padding: 0.5rem;
  border: 2px solid #282c34;
`;

export const Form = styled(FormAntd)`
  border: 2px solid #282c34;
  padding: 0.5rem;
`;
