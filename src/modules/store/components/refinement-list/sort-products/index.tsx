import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { ChangeEvent } from "react"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Últimas chegadas",
  },
  {
    value: "price_asc",
    label: "Preço: Baixo -> Alto",
  },
  {
    value: "price_desc",
    label: "Preço: Alto -> Baixo",
  },
]

const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }

  return (
    <FilterRadioGroup
      title="Sort by"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
