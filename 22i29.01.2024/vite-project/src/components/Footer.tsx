import React from 'react';

interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author }) => {
  const currentYear = new Date().getFullYear();
  return <footer>Copyright {author} {currentYear}</footer>;
};

export default Footer;