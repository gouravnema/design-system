import React from 'react';
import { ParsedText } from './parsed_text';

export default {
  title: 'Widgets/ParsedText',
  component: ParsedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export const WithURL = {
  args: {
    text: 'Check out our website at https://example.com for more information',
  },
};

export const WithEmail = {
  args: {
    text: 'Contact us at support@example.com for any questions',
  },
};

export const WithPhoneNumber = {
  args: {
    text: 'Call me at +1-5551234567 or +33612345678',
  },
};

export const WithAllTypes = {
  args: {
    text: 'Visit https://example.com, email us at info@example.com, or call +1-5551234567 for support',
  },
};

export const MultipleLinks = {
  args: {
    text: 'You can reach us via https://website.com, email john@example.com or jane@company.org, or call +1-5551234567 and +44-2071234567',
  },
};

export const PlainText = {
  args: {
    text: 'This is just plain text with no links or contact information',
  },
};

export const HTTPAndHTTPS = {
  args: {
    text: 'Visit us at http://oldsite.com or the new site at https://newsite.com',
  },
};

export const InternationalPhoneNumbers = {
  args: {
    text: 'Call +1-5551234567 (USA), +44-2071234567 (UK), or +33612345678 (France)',
  },
};

export const ComplexMixedContent = {
  args: {
    text: 'Our team can be reached at team@company.com, via our website https://company.com/contact, or by calling +1-5551234567. International customers can contact +44-2071234567. For urgent matters, email support@company.com or visit https://company.com/support ',
  },
};
