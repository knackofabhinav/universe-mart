

export const ProductListing = ({productlist}) => {
    console.log(productlist)
    return(
        <div>
            <ul>
                {productlist.map(product => {
                    return <li key={product.key}>{product.name}</li>
                })}
            </ul>
        </div>
    )
}