'use client';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Hamburger({ open }: { open: () => void }) {
  return (
    <div className="lg:hidden">
      <button
        onClick={open}
        aria-label="open menu"
        className="text-white cursor-pointer text-3xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}
