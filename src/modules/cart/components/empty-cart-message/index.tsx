import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Carrinho
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
      Você não tem nada na sua bolsa. &apos;s  Vamos mudar isso, use
         o link abaixo para começar a navegar em nossos produtos.
      </Text>
      <div>
        <UnderlineLink href="/store">Explorar produtos</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
