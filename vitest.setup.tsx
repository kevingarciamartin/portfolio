import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next-view-transitions
vi.mock("next-view-transitions", () => ({
  Link: ({
    children,
    href,
    className,
    target,
    rel,
    style,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    target?: string;
    rel?: string;
    style?: React.CSSProperties;
  }) => (
    <a href={href} className={className} target={target} rel={rel} style={style}>
      {children}
    </a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
    style,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    priority?: boolean;
    sizes?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  ),
}));
