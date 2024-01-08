import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle block sm:hidden">
      <div className="grid grid-cols-3 gap-4 inset-0 z-10  items-center text-center small:p-32 ">
        <Image
          src="https://raw.githubusercontent.com/cafrontadoe/fitabsolutefotos/master/jcutler.gif"
          className="relative inset-0 rounded-rounded"
          alt={`fit absolute pro, proteina, creatina, aminoacidos `}
          layout="responsive"
          width={100}
          height={200}
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 300px, 500px"
        />
        <div className="animate__animated animate__fadeIn animate__delay-1000">

        <Image
          src="https://raw.githubusercontent.com/cafrontadoe/fitabsolutefotos/master/cbum.gif"
          className="relative mt-10 inset-0 rounded-rounded custom-fade-in"
          alt={`fit absolute pro, proteina, creatina, aminoacidos `}
          layout="responsive"
          width={100}
          height={200}
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 300px, 500px"
          />
          </div>
        <Image
          src="https://raw.githubusercontent.com/cafrontadoe/fitabsolutefotos/master/jcutler.gif"
          className="relative inset-0 rounded-rounded"
          alt={`fit absolute pro, proteina, creatina, aminoacidos `}
          layout="responsive"
          width={100}
          height={200}
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 300px, 500px"
        />
      </div>
    </div>
  )
}

export default Hero
