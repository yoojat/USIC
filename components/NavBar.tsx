import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { media, mediaSize } from '../styles/theme';
import { useEffect, useState } from 'react';
import firstPathFinder from '../utils/firstPathfinder';

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
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

const ImageContainer = styled.div`
  width: 100px;
  position: relative;
`;
const MenuContainer = styled.div`
  ${media.tablet} {
    display: none;
  }
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;

  color: white;
  a {
    padding: 15px;
  }
`;

const MenuTitle = styled.span<{ isNowPage?: boolean }>`
  &:hover {
    color: #594be4;
    text-shadow: none;
  }
  color: ${(props) => (props.isNowPage ? props.theme.color.purple : 'inherit')};
  text-shadow: ${(props) => (props.isNowPage ? 'none' : '1px 1px 5px black')};
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

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setIsSideMenuShow(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
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
                  height: '70px',
                }}
              >
                <Image
                  src={'/logo.png'}
                  alt={'무인공간통합센터'}
                  layout='fill'
                  objectFit='cover'
                  priority={true}
                />
              </div>
            </a>
          </Link>
        </ImageContainer>
        <MenuContainer>
          <MenuTitle isNowPage={firstPathFinder(router.pathname) === 'about'}>
            <Link href='/about'>회사소개</Link>
          </MenuTitle>
          <MenuTitle
            isNowPage={firstPathFinder(router.pathname) === 'services'}
          >
            <Link href='/services/program'>제공서비스</Link>
          </MenuTitle>
          <MenuTitle isNowPage={firstPathFinder(router.pathname) === 'price'}>
            <Link href='/about'>요금안내</Link>
          </MenuTitle>
          <MenuTitle isNowPage={firstPathFinder(router.pathname) === 'process'}>
            <Link href='/about'>계약프로세스</Link>
          </MenuTitle>
        </MenuContainer>
        <SideMenuContainer isSideMenuShow={isSideMenuShow}>
          <SideMenuNavContainer>
            <Link href={'/about'}>
              <SideMenuItem>회사소개</SideMenuItem>
            </Link>
            <Link href={'/services/program'}>
              <SideMenuItem>제공서비스</SideMenuItem>
            </Link>
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
