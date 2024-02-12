import { Code } from "bright";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  pre: Code,
  a: ({ children, ...props }) => {
    return (
      <a {...props} href={props.href ?? ""}>
        {children}
      </a>
    );
  },
  img: ({ children, ...props }) => {
    // You need to do some work here to get the width and height of the image.
    // See the details below for my solution.
    return <img {...props} />;
  },
  // any other components you want to use in your markdown
};
