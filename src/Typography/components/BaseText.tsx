import React from 'react';

export type BaseTextProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  className?: string;
  children: React.ReactNode;
};

/**
 * Базовый текстовый компонент
 * @param tag - тег
 * @param className - класс
 * @param children - содержимое
 */
export const BaseText = ({
  tag = 'span',
  className,
  children,
}: BaseTextProps) => {
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

export type BaseTextType = typeof BaseText;
