import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Navbar from "@modules/home/components/menu"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import StoreTemplate from "@modules/store/templates"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Fit Absolute Pro",
  description:
    "Fit Store",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>    
      <Hero />
      {/* <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense> */}
      <StoreTemplate />
    </>
  )
}
