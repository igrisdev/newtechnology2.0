import { useStoreProducts } from '@/stores/storeProducts'

export const TextoButton = ({ text = '# Productos' }: { text?: string }) => {
  const { products } = useStoreProducts()

  return (
    <span>
      {text} ({products?.length})
    </span>
  )
}
