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
  align-items: flex-start;
`;

const LogoImgContainer = styled.div`
  span {
    border-radius: 50px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  margin-right: 20px;
`;

const Footer: NextComponentType = () => {
  return (
    <ContainerFooter>
      <FooterContentContainer>
        <LogoImgContainer>
          <Image
            width={40}
            height={40}
            objectFit={'contain'}
            src={'/logo.png'}
            alt={'logo'}
          />
        </LogoImgContainer>
        <div
          style={{
            paddingBottom: '10px',
            marginLeft: '10px',
            lineHeight: '1.3',
          }}
        >
          (주)크리플레이 ㅣ COPYRIGHT 2021.
          <br />
          CREPLAY ALL RIGHT RESERVED
          <br /> 주소 : 부산 북구 양달로 4번길 11, 세흥빌딩 4층
          <br />
          대표자 : 송병근
          <br />
          사업자 등록 번호 : 617-86-24973
        </div>
      </FooterContentContainer>
    </ContainerFooter>
  );
};

export default Footer;
