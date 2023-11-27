import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  download?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
  type,
  disabled,
  ...props
}: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    setTimeout(() => {
      const containerSection = document.querySelector('.containerSection');

      if (containerSection) {
        containerSection?.classList.add('active');
      }
    }, 100);

    // Verifica se o href está presente e se o botão é o primeiro
    if (href && e.currentTarget === e.currentTarget.parentElement?.firstChild) {
      e.preventDefault();
      window.open(href, '_blank');
    }
  }

  return (
    <>
      {href ? (
        <Link
          to={`/${href}`}
          {...props}
          className={styles.button}
          onClick={handleClick}
        >
          {children}
        </Link>
      ) : (
        <button className={styles.button} type={type} disabled={disabled} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
}
