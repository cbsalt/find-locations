import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Spots</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quidem
        provident debitis? Laborum natus architecto sequi consequatur ut tempora
        animi! Neque velit distinctio corrupti totam consequatur earum quos
        inventore alias.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
