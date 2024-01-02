import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Image
          src="https://fitabsolute-server.s3.amazonaws.com/hero.jpg"
          className="absolute inset-0 rounded-rounded"
          alt={`fit absolute pro, proteina, creatina, aminoacidos `}
          layout="responsive"
          width={500}
          height={200}
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 300px, 500px"
        />
      </div>
    </div>
  )
}

export default Hero
