import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Card } from '../../design-system/card';
import { Head3 } from '../../components/sprites/people';


interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Navbar = styled(Card)`
    width: calc(100% - 24px);
    padding: 0;
    margin: 10px;
    display: flex;
    gap: 10px;
    font-size: 1rem;
    .title{
        margin: 0 10px;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
    .cta{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
    .profile{
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
}

const NavbarBrand = styled.div<NavbarBrandProps>``;

interface NavbarTogglerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const NavbarToggler = styled.div<NavbarTogglerProps>``;


const ItemViewContainer = styled.div`
    //border: 1px solid blue;
    padding: 5px 10px;
    min-width: 50px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
const ItemCollectionViewContainer = styled.div``;

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

export type ItemType = Array<MenuItem|MenuCollection>;

interface ProfileData extends React.HTMLAttributes<HTMLDivElement> {
  data?: {
    name: string;
    avatarUrl?: string;
  };
}

export interface TopNavigationProps {
  toggleShowSideNav: () => void;
  items?: ItemType;
  title?: string;
  profileData?: ProfileData;
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
    //border: 1px solid darkred;
    padding: 5px;
    flex-grow: 1;

`;

const ProfileContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    //border: 1px solid green;
    padding: 5px; 
    >.img-holder{
        width:30px;
        height:30px;
        border-radius: 50%;
    }
`;

const Items = ({items}:{items:ItemType})=>{
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
}


const Profile = ({ data }: { data?: { name: string; avatarUrl?: string } }) => {
  return (
    <ProfileContainer>
      <div className={'img-holder'}>
      {data?.avatarUrl && <img src={data.avatarUrl} alt={data.name} /> || <Head3/>}
      </div>
      <span>{data?.name}</span>
    </ProfileContainer>
  );
}

export const TopNavigation: React.FC<TopNavigationProps> = ({title, toggleShowSideNav, profileData, items = [] }) => {


  return (
    <Navbar>
      <NavbarBrand>
        <span />
      </NavbarBrand>
      <span>{title}</span>
      <Items items={items} />
      <Profile data={profileData}/>
      <NavbarToggler onClick={toggleShowSideNav} />
    </Navbar>
  );
};
