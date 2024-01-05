import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import SubmitSpinner from "../components/submit-spinner"
import Image from "next/image"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="relative small:min-h-screen">
        <SubmitSpinner />
        <div className="bg-black h-16">
          <nav className="flex items-center h-full justify-between content-container border-b">
            <Link
              href="/cart"
              className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="text-white mt-px hidden small:block txt-compact-plus text-ui-fg-subtle hover:text-white uppercase">
                  Voltar ao carrinho de compras
                </span>
                <span className="text-white mt-px block small:hidden">Voltar</span>
              </>
            </Link>
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase color-orange-fit"
            >
              <Image
                src="https://raw.githubusercontent.com/cafrontadoe/fitabsolutefotos/master/branding/logo.png"
                className=""
                alt={`fit absolute pro, proteina, creatina, aminoacidos `}
                layout="responsive"
                width={10}
                height={10}
                sizes="(max-width: 576px) 3rem, (max-width: 768px) 4rem, (max-width: 992px) 4rem, 3rem"
              />
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
