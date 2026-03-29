import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailReply } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {Text, type TextProps} from '../../typography/text';



// this component is used to parse text for http, email address, and telephone links and make them clickable links
export const ParsedText = ({ text, ...rest }: { text: string } & TextProps) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;
  const phoneRegex = /^\+\d{1,3}-?\d{1,14}$/; // Phone: +country code-phone or +country code phone

  // Combined regex for splitting - matches URLs, emails, or phone numbers
  // URLs: https://... or http://...
  // Emails: word characters, dots, hyphens, underscores @ domain
  // Phone: +<country code>-<phonenumber> or +<country code><phonenumber>
  const matchRegex = /(https?:\/\/[^\s]+|\+\d{1,3}-?\d{1,14}|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = matchRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const part = match[0];

    // Determine if it's a phone number, email, or URL
    if (part.startsWith('+') && phoneRegex.test(part)) {
      // Normalize phone number (remove hyphens for links)
      const normalizedPhone = part.replace(/-/g, '');
      parts.push(
        <span key={parts.length}>
                    {part} (
                    <a href={`whatsapp://send?phone=${normalizedPhone}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    , &nbsp;
          <a href={`tel:${normalizedPhone}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    )
                </span>
      );
    } else if (part.includes('@') && emailRegex.test(part)) {
      parts.push(
        <a key={parts.length} href={`mailto:${part}`} target="_blank" rel="noopener noreferrer">{part}</a>
      );
    } else if (part.startsWith('http://') || part.startsWith('https://')) {
      parts.push(
        <a key={parts.length} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      );
    } else {
      parts.push(part);
    }

    lastIndex = match.index + part.length;
  }

  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return (
    <Text {...rest}>
      {parts}
    </Text>
  );
}