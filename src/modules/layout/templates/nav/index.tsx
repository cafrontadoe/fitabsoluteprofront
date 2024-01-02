"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import { useRegions } from "medusa-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import ReactCountryFlag from "react-country-flag"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const { regions } = useRegions()

  const countryOptions = useMemo(() => {
    const currentRegion = regions?.find((r) => r)

    if (!regions) {
      return []
    }

    return currentRegion?.countries.map((country) => ({
      value: country.iso_2,
      label: country.display_name,
    }))
  }, [regions])

  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group ">
      <header className="relative h-16 px-6 mx-auto border-b duration-200 bg-black border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <SideMenu searchModalOpen={searchModalOpen} />
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src="https://raw.githubusercontent.com/cafrontadoe/fitabsolutefotos/master/branding/logo.png"
              className=""
              alt={`fit absolute pro, proteina, creatina, aminoacidos `}
              layout="responsive"
              width={10}
              height={10}
              sizes="(max-width: 576px) 3rem, (max-width: 768px) 4rem, (max-width: 992px) 4rem, 3rem"
            />
            {/* <Link
              href="/"
              className="txt-compact-xlarge-plus hover:color-orange-fit uppercase color-orange-fit"
            >
              Fit Absolute Pro
            </Link> */}
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden md:block mr-2">
              {countryOptions?.map((country, index) => (
                <div key={index}>
                  <ReactCountryFlag countryCode={country.value} svg />
                </div>
              ))}
            </div>
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <DesktopSearchModal
                  state={searchModalState}
                  close={searchModalClose}
                  open={searchModalOpen}
                />
              )}
              {/* <Link className="color-d4" href="/account">
                Account
              </Link> */}
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
