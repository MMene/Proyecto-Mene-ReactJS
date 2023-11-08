const ItemListContainer = ({greeting = 'saludando por defecto'}) => {
  return (
    <div className="greeting">{greeting}</div>
  )
}

export default ItemListContainer;