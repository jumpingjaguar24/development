import './BakeryItem.css';
import './App.js';
import './App.css';

function MakeItem(props){
    const SetBoth = (x, item) => {
        props.setTotal(props.total + x) ;
        props.setCart([...props.cart, <br/>, item.name, "  $", item.price]);
      }
    return(
        <div className='item-card'>
            <ul className='top-of-card'>
            <li className='list-item'><h3>  {props.item.name} </h3></li>
            <li className='cart-item'>
                <button className='cart-button' onClick={() => SetBoth(props.item.price, props.item)}>
                    <img className='cart-image' src='https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png'/>
                </button>
            </li>
            </ul>
            <img src={props.item.image}/> 
            <div className='description'>
                <strong>
                <p> Price: ${props.item.price}</p>
                </strong>
                <em> <p> {props.item.type} </p></em>
                <p> {props.item.desc} </p>
                <p className='restriction'> Dietary Restrictions: {props.item.restriction} </p>
            </div>
        </div>
    );
}

export default MakeItem;