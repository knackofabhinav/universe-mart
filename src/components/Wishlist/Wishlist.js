export const Wishlist = () => {
    const wishlist = []
    return(
        <div style={{minHeight: '100vh', display:"flex", justifyContent:'center'}}>
        {wishlist.length===0 && <h1 style={{position:'absolute' ,top: '50%',justifySelf: 'center', alignSelf:'center', color: "lightgrey", textAlign: 'center'}}>Man ! Even Your wishlist is empty.</h1>}
        </div>
    )
}