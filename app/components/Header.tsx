'use client';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { AcmeLogo } from '@/app/common/AcmeLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Store', 'About', 'Contact', 'Log Out'];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='2xl'
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>HUM Clothing</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex gap-4 flex-grow'
        justify='center'
      >
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>HUM Clothing</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href='#'>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground' aria-current='page'>
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='warning' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
