import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Nome"
            {...register("billing_address.first_name", {
              required: "Nome é necessário",
            })}
            autoComplete="nome-dado"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Apelido"
            {...register("billing_address.last_name", {
              required: "Apelido é necessário",
            })}
            autoComplete="apelido"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Endereço"
            {...register("billing_address.address_1", {
              required: "Endereço é necessário",
            })}
            autoComplete="endereço-linha1"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Empresa"
            {...register("billing_address.company")}
            autoComplete="empresa"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Código postal"
            {...register("billing_address.postal_code", {
              required: "Código postal é necessário",
            })}
            autoComplete="codigo-postal"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Cidade"
            {...register("billing_address.city", {
              required: "Cidade é necessário",
            })}
            autoComplete="endereço-linha2"
            errors={errors}
            touched={touchedFields}
            required
          />
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "País é necessário",
            })}
            autoComplete="País"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="Estado"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Telefone"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
