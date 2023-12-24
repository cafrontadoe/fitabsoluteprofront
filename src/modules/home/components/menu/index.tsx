"use client"

import Link from "next/link"
import { useProductCategories } from "medusa-react"
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const { product_categories } = useProductCategories()

  if (!product_categories) {
    return null
  }

  return (
    <nav className="hidden md:flex bg-black p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {product_categories?.map((category) => (
            <NavLink key={category.id} href={`/${category.handle}`}>
              {category.name}
            </NavLink>
          ))}
        </div>
        {/* Add a responsive menu button for small screens */}
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: any) => {
  const router = useRouter();
  const pathname = usePathname()


  const isActive = pathname === href || (href === '/' && pathname === '');

  const linkStyles = `text-white hover:text-gray-300 text-lg ${isActive ? 'navbar-item' : ''}`;


  return (
    <Link href={href} className={`text-white ${linkStyles}  hover:text-gray-300 text-lg `}>
      <span className={ `text-white hover:text-gray-300 text-lg `}>
        {children}
      </span>
    </Link>
  )
}

export default Navbar
