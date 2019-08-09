import styled from 'styled-components';
import { getLuminance } from 'polished';

const Container = styled.div`
  max-width: 700px;
  background: ${props => props.background ? props.background : '#fff' };
  color: ${props => props.background && getLuminance(props.background) < 0.5 ? '#fff' : '#000' };
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export default Container;