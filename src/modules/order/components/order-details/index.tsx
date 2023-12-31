import { Order } from "@medusajs/medusa"
import { Heading, Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text className="mt-8">
        Enviamos os detalhes de confirmação do pedido para{" "}
        <span className="text-ui-fg-medium-plus font-semibold">
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Data do pedido: {new Date(order.created_at).toDateString()}
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Número do pedido: {order.display_id}
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Status do pedido:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Status do pagamento:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
