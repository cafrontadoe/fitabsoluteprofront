import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function StorePage() {
  return <>
  {/* <Hero /> */}
  <StoreTemplate />
  </>
}
