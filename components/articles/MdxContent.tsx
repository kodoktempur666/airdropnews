import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { SecurityWarningBox } from './SecurityWarningBox';

function createHeadingId(children: React.ReactNode): string {
  const text = typeof children === 'string' ? children : String(children || '');
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

const customComponents = {
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
    const id = createHeadingId(children);
    return (
      <h2 id={id} className="scroll-mt-24 group relative" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => {
    const id = createHeadingId(children);
    return (
      <h3 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    if (!href) return <a {...props}>{children}</a>;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    if (isInternal) {
      return (
        <Link href={href} {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'>)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  SecurityWarning: SecurityWarningBox,
};

interface Props {
  source: string;
}

export function MdxContent({ source }: Props) {
  return (
    <div className="article-prose">
      <MDXRemote source={source} components={customComponents} />
    </div>
  );
}
