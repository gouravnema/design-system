// copilot generate a React component for displaying user avatars with
// for profile picture, this will get url as prop and if no url is provided it will show default avatar
// default avatar image  will be taken from  heads_sprite.webp file next folder
import React from 'react';
import styled from 'styled-components';
import defaultAvatar from './heads_sprite.webp';
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number; // size in pixels
  src?: string; // url for profile picture
  alt?: string; // alt text for image
}
const AvatarImage = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Avatar: React.FC<AvatarProps> = ({ size = 50, src, alt = 'User Avatar', ...rest }) => {
  return <AvatarImage size={size} src={src || defaultAvatar} alt={alt} {...rest} />;
};

