import { NextComponentType } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  padding: 15px;
  background-color: ${(props) => props.theme.color.gray};
`;

const FooterContentContainer = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

const LogoImgContainer = styled.div`
  span {
    border-radius: 40px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const Footer: NextComponentType = () => {
  return (
    <ContainerFooter>
      <FooterContentContainer>
        <LogoImgContainer
          style={{ position: 'relative', width: '80px', height: '50px' }}
        >
          <Image
            width={50}
            height={50}
            objectFit={'contain'}
            src={'/logo.png'}
            alt={'logo'}
          />
        </LogoImgContainer>
        <div style={{ paddingBottom: '10px', marginLeft: '10px' }}>
          무인공간통합센터 | 부산광역시 북구 양달로 4번길 11
        </div>
      </FooterContentContainer>
    </ContainerFooter>
  );
};

export default Footer;
