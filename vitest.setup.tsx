import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next-view-transitions
vi.mock("next-view-transitions", () => ({
  Link: ({ children, href, className, target, rel, style }: any) => (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      style={style}
    >
      {children}
    </a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, priority, className, style, sizes }: any) => (
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
