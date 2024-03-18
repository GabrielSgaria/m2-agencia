'use client';
import Link from 'next/link';
import { DotsHorizontalIcon, PersonIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='z-50 relative'>
      <div className="shadow-md bg-neutral-950">
        <div
          className={`container mx-auto flex flex-row items-center justify-between gap-8 py-6 text-lg px-8  ${isMenuOpen ? 'flex-col' : 'flex-row'}`}
        >
          <div className="flex h-9 w-9 items-center justify-center lg:hidden"> 
            <DotsHorizontalIcon
              onClick={handleMenuToggle}
              className="size-8 text-zinc-50 hover:size-9 focus:outline-none lg:hidden"
            />
          </div>
          <div>
            <Link
              href="/"
              onClick={closeMenu}
              className="tracking-[.1rem] bebasNeue text-3xl font-bold text-neutral-50 hover:underline"
            >
              {'M2 AGÊNCIA'}
            </Link>
          </div>

          <div
            className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? 'flex' : 'hidden'}`}
          >
            <nav className="md:flex grow justify-center ">
              <div
                className={`flex min-w-0 flex-row items-center justify-center gap-8 text-base ${isMenuOpen ? 'flex-col' : 'flex-row'}`}
              >
                <Link
                  onClick={closeMenu}
                  href="/"
                  className="cursor-pointer px-3 bg-neutral-950 saira text-2xl text-neutral-50 hover:underline"
                >
                  Inicio
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/#studies"
                  className="cursor-pointer px-3 bg-neutral-950 saira text-2xl text-neutral-50 hover:underline"
                >
                  Sobre Nós
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/#undertaking"
                  className="cursor-pointer px-3 bg-neutral-950 saira text-2xl text-neutral-50 hover:underline"
                >
                  Serviços
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/#certificates"
                  className="cursor-pointer px-3 bg-neutral-950 saira text-2xl text-neutral-50 hover:underline"
                >
                  Clientes
                </Link>
              </div>
            </nav>
          </div>

          <Link
            href="#contatos"
            className=" text-neutral-50"
          >
            <PersonIcon className="size-7 w-8 transition-all duration-300 hover:size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
