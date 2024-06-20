declare module "react-anchor-link-smooth-scroll" {
  import * as React from "react";

  interface AnchorLinkProps {
    href: string;
    offset?: () => number | number;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export default class AnchorLink extends React.Component<AnchorLinkProps> {}
}
