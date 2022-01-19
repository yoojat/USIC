import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { media, mediaSize } from '../styles/theme';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: absolute;
`;
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  z-index: 1000;
`;

const ImageContainer = styled.div`
  width: 150px;
  position: relative;
`;
const MenuContainer = styled.div`
  ${media.tablet} {
    display: none;
  }
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  a {
    padding: 15px;

    &:hover {
      color: ${(props) => props.theme.color.thirdBlue};
    }
  }
`;

const MenuBarContainer = styled.div`
  ${media.pc} {
    display: none;
  }
  ${media.tablet} {
    display: inherit;
  }
  cursor: pointer;
  z-index: 999;

  // 더블 클릭시 선택 안되도록
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SideMenuContainer = styled.div<{ isSideMenuShow: boolean }>`
  background-color: ${(props) => props.theme.color.fifthBlue};
  left: ${(props) => (props.isSideMenuShow ? 0 : '-100%')};
  opacity: ${(props) => (props.isSideMenuShow ? 1 : 0)};
  top: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);
  ${media.pc} {
    display: none;
  }
  ${media.tablet} {
    display: inherit;
  }
`;

const SideMenuNavContainer = styled.nav`
  font-size: 22px;
  letter-spacing: 0em;
  line-height: 1.6em;
  color: white;
  padding: 50px 30px;
  font-weight: 700;
`;
const SideMenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.thirdBlue};
  }
`;

export default function NavBar() {
  const router = useRouter();
  const [isSideMenuShow, setIsSideMenuShow] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > mediaSize.tablet) {
      setIsSideMenuShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <NavContainer>
        <ImageContainer>
          <Link href='/'>
            <a>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '120px',
                }}
              >
                <Image
                  src={'/logo.png'}
                  alt={'Website In Busan'}
                  layout='fill'
                  objectFit='cover'
                  priority={true}
                />
              </div>
            </a>
          </Link>
        </ImageContainer>
        <MenuContainer>
          <Link href='/'>회사소개</Link>
          <Link href='/about'>제공서비스</Link>
          <Link href='/about'>요금안내</Link>
          <Link href='/about'>계약프로세스</Link>
        </MenuContainer>
        <SideMenuContainer isSideMenuShow={isSideMenuShow}>
          <SideMenuNavContainer>
            <SideMenuItem>회사소개</SideMenuItem>
            <SideMenuItem>제공서비스</SideMenuItem>
            <SideMenuItem>요금안내</SideMenuItem>
            <SideMenuItem>계약프로세스</SideMenuItem>
          </SideMenuNavContainer>
        </SideMenuContainer>
        <MenuBarContainer onClick={() => setIsSideMenuShow((prev) => !prev)}>
          {isSideMenuShow ? (
            <FontAwesomeIcon icon={faTimes} size='3x' />
          ) : (
            <FontAwesomeIcon icon={faBars} size='3x' />
          )}
        </MenuBarContainer>
      </NavContainer>
    </Wrapper>
  );
}
