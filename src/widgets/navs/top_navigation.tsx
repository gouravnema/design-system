import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Card, Silhouette } from '../../components';
import { NavbarBrand } from './navbar_brand';
import LogoImg from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SHADOW } from '../../theme';

const Navbar = styled(Card)`
    
    width: calc(100% - 24px);
    min-height: 40px;
    padding: 0;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: clamp(12px, 1.25vw, 18px);
    background-color: ${COLORS.base};
    position: relative;

    @media (max-width: 768px) {
        width: calc(100% - 16px);
        margin: 3px;
        font-size: clamp(10px, 2vw, 14px);
    }
`;

const ItemViewContainer = styled.div`
    padding: 5px 10px;
    min-width: 50px;
    border-radius: 8px;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.baseLight};
        box-shadow: ${SHADOW.light};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }

    @media (max-width: 768px) {
        padding: 12px 15px;
        font-size: 14px;
        width: 100%;
        white-space: normal;
        justify-content: center;
    }
`;

export type MenuItem = {
  label: string;
  icon?: IconProp;
  id: string;
  onClick: (e: SyntheticEvent) => void;
  isSelected?: boolean;
}

export type MenuCollection = {
  items: MenuItem[];
  label: string;
};

export type ItemType = Array<MenuItem | MenuCollection>;

interface ProfileData {
    name: string;
    avatarUrl?: string;
}

export interface TopNavigationProps {
  items?: ItemType;
  title?: string;
  profileData: ProfileData;
}

const ItemView = ({ item }: { item: MenuItem }) => {
  return (
    <ItemViewContainer key={item.id} onClick={item.onClick}>
      {item.icon && <span className={'icon'}>
        <i className={`icon-${item.icon}`}></i>
      </span>
      }
      <span className={'label'}>
       {item.label}
      </span>
    </ItemViewContainer>
  );
};

const ItemCollectionView = ({ collection }: { collection: MenuCollection }) => {
  return (
    <div key={collection.label}>
      <span>{collection.label}</span>
      <div>
        {collection.items.map(subItem => (
          <ItemView key={subItem.id} item={subItem} />
        ))}
      </div>
    </div>
  );
};

const ItemsContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
        padding: 0;
        max-height: ${props => props.isOpen ? '1000px' : '0'};
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
        border-top: ${props => props.isOpen ? `1px solid ${COLORS.baseBorder}` : 'none'};
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 5px;
    flex-direction: row;

    >.img-holder {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        min-height: 40px;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding: 10px 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        gap: 10px;

        >.img-holder {
            width: 40px;
            height: 40px;
        }
    }
`;

const Items = ({ items, isOpen = false }: { items: ItemType; isOpen?: boolean }) => {
  return <ItemsContainer isOpen={isOpen} className={'items'}>
    {items.map((item) => {
      if ('items' in item) {
        // It's a MenuCollection
        return (
          <ItemCollectionView key={item.label} collection={item} />
        );
      } else {
        // It's a MenuItem
        return (
          <ItemView key={item.id} item={item} />
        );
      }
    })}
  </ItemsContainer>;
};


const Profile = ({ data, isOpen }: { data?: { name: string; avatarUrl?: string }, isOpen:null|boolean }) => {

  if (isOpen === false) {
    return
  }
  return (
    <ProfileContainer>
      <div className={'img-holder'}>
        {data?.avatarUrl && <img src={data.avatarUrl} alt={data.name} /> ||
          <Silhouette code={'head_1_2'} rounded size={4} />}
      </div>
      <div>
        {data?.name}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </ProfileContainer>
  );
};

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${COLORS.text};
    padding: 5px 10px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


const NavbarTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SmallScreen = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const LargeScreen = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`

export const TopNavigation: React.FC<TopNavigationProps> = ({ title, profileData, items = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <NavbarTop>
        <NavbarBrand title={title} logo={LogoImg} />
        <LargeScreen>
          <Items items={items} isOpen={isMenuOpen} />
          <Profile data={profileData} />
        </LargeScreen>
        <HamburgerButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </HamburgerButton>

      </NavbarTop>
      <SmallScreen>
        <Items items={items} isOpen={isMenuOpen} />
        <Profile data={profileData}  isOpen={isMenuOpen}/>
      </SmallScreen>

    </Navbar>
  );
};
