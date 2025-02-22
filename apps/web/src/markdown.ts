import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkDirective from "remark-directive";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

function customElementsPlugin() {
  return function (tree: any) {
    visit(tree, function (node) {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (node.name !== "notice") return;

        const data = node.data || (node.data = {});
        const tagName = node.type === "textDirective" ? "span" : "div";

        data.hName = tagName;
        data.hProperties = h(tagName, {
          ...node.attributes,
          class: `notice ${node.attributes.class}`,
        }).properties;
      }
    });
  };
}

export const markdownToHtml = async (markdown: string) => {
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkDirective)
    .use(customElementsPlugin)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return processedContent.toString();
};
