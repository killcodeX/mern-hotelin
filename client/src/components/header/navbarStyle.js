import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  z-index: 1;
  width: 100%;
  padding: 10px 25px;
  min-height: 82px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0px;
  transition: all 0.3s ease-out 0s;
`;

export const LogoWrapper = styled.img`
  width: 60px;
  @media (max-width: 480px) {
    width: 40px;
  }
`;

export const ImageAvatar = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DropdownMenu = styled.div`
  min-width: 150px;
  padding:10px;
  background:white;
  border-right: 0;
  position: absolute;
  right: 44px;
  top: 76px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  &.hide {
    opacity: 0;
    visibility: hidden;
  }
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;