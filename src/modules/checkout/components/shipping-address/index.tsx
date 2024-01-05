import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"
import { Container } from "@medusajs/ui"

const ShippingAddress = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  const { customer } = useMeCustomer()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {`Olá ${customer.first_name}, você deseja usar um dos seus endereços salvos?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </Container>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nome"
                {...register("shipping_address.first_name", {
                  required: "Nome é necessário",
                })}
                autoComplete="nome-dado"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Apelido"
                {...register("shipping_address.last_name", {
                  required: "Apelido é necessário",
                })}
                autoComplete="apelido"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Endereço"
                {...register("shipping_address.address_1", {
                  required: "Endereço é necessário",
                })}
                autoComplete="Endereço-linha1"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Empresa"
                {...register("shipping_address.company")}
                autoComplete="organização"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Código postal"
                {...register("shipping_address.postal_code", {
                  required: "Código postal é necessário",
                })}
                autoComplete="codigo-postal"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Cidade"
                {...register("shipping_address.city", {
                  required: "Cidade é necessário",
                })}
                autoComplete="Endereço-linha2"
                errors={errors}
                touched={touchedFields}
                required
              />
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "País é necessário",
                })}
                autoComplete="país"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Estado"
                {...register("shipping_address.province")}
                autoComplete="Endereço-linha1"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <div className="my-8">
              <Checkbox
                label="O mesmo endereço de cobrança"
                checked={checked}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="E-mail"
                {...register("email", {
                  required: "E-mail é necessário",
                  pattern: emailRegex,
                })}
                autoComplete="E-mail"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Telefone"
                {...register("shipping_address.phone")}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </div>
          </>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
