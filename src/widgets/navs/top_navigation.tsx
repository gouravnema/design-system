import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Card } from '../../design-system';
import { Silhouette } from '../../components/sprites/people/silhouette';
import { NavbarBrand } from './navbar_brand';
import LogoImg from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = styled(Card)`
    width: calc(100% - 24px);
    min-height: 40px;
    max-height: 80px;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 10px;
    font-size: 1.25vw;
    max-font-size: 1rem;
`;

const ItemViewContainer = styled.div`
    padding: 5px 10px;
    min-width: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
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

const ItemsContainer = styled.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
`;

const ProfileContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px;
    flex-direction: row;

    >.img-holder {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Items = ({ items }: { items: ItemType }) => {
  return <ItemsContainer>
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


const Profile = ({ data }: { data?: { name: string; avatarUrl?: string } }) => {
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

export const TopNavigation: React.FC<TopNavigationProps> = ({ title, profileData, items = [] }) => {
  return (
    <Navbar>
      <NavbarBrand title={title} logo={LogoImg} />
      <Items items={items} />
      <Profile data={profileData} />
    </Navbar>
  );
};
