"use client"

import { Heading, Text } from "@medusajs/ui"
import { Spinner } from "@medusajs/icons"
import { useCart } from "medusa-react"

const SubmitSpinner = () => {
  const {
    completeCheckout: { isLoading },
  } = useCart()

  if (isLoading) {
    return (
      <div className="w-full h-full bg-white z-[9999] fixed flex flex-col items-center justify-center overflow-hidden ">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <div className="flex items-center gap-x-3">
            <Spinner className="animate-spin" />
            <Heading className="text-gray-900 text-2xl font-medium">
              Por favor, aguarde...
            </Heading>
          </div>
          <Text>
            Seu pedido está sendo processado. Não pressione voltar ou atualizar até que seu
             o pedido está completo.
          </Text>
        </div>
      </div>
    )
  }

  return null
}

export default SubmitSpinner
