"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base w-screen">
      <div className="content-container flex flex-col">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Fit Absolute Pro
            </Link>
          </div>
          <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
            {product_categories && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <Link
                          className={clsx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-ui-fg-base"
                                    href={`/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clsx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <Link
                className="hover:text-ui-fg-base txt-small-plus txt-ui-fg-base"
                href={`/contact`}
              >
                Contato
              </Link>
              <div className="flex justify-center space-x-2 mb-8">
                <a
                  href="https://www.instagram.com/fitabsolutepro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 cursor-pointer" />
                </a>
                <a
                  href="https://www.facebook.com/fitabsolute.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
                </a>
                <a
                  href="https://wa.me/+351929002531"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-3xl text-green-500 hover:text-green-700 cursor-pointer" />
                </a>
                <a href="mailto:fitabsolutepro@gmal.com">
                  <FaEnvelope className="text-3xl text-red-500 hover:text-red-700 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Fit Absolute Pro. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
