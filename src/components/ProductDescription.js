import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';


export class ProductDescription extends Component {
    state = {
        image: 0,
        cartItems: []

    }

    render() {
        const data = this.props.data.product;
        const { image } = this.state;
        let des = data.description;

        const renderDescription = () => {
            let x = des.substr(3);
            let z = x.slice(0, -4);
            return z
        }
        
        
        const changeImg = (e) => {
            this.setState({ image: e });

        }
        const fetchCurrency = () => data.prices.map((e, i) => {
            if (e.currency.symbol === this.props.currency_name) {
                return (
                    <p className='' style={{ color: '#000' }} key={i}>{e.currency.symbol}{e.amount}</p>
                )
            }
        });

        const addItemToCart = (e) => {
            const cart_arr = this.props.cart_items;
            let item = cart_arr.find((x) => x.id === e.id);
            if (!item) {
                cart_arr.push({ ...e, quantity: 1 });
                this.props.addToCart(cart_arr);
            }
        };

        return (
            <div>
                <section className=''>
                    <div className='prd-mini-cont d-flex'>
                        <div className='prd-v' style={{ height: '400px' }}>
                            {data.gallery.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <img src={e} onMouseEnter={() => changeImg(i)} width='80' alt='gallary' />

                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='lg-img'>
                            <div>
                                <img src={data.gallery[image]} id='' style={{ objectFit: "contain" }} width='610' height='450' alt='gallary' />

                            </div>
                        </div>
                        <div className='prd-cart'>
                            <div className='checkoutcart'>
                                <div>

                                    <div className='d-flex cart-checkout justify-between'>

                                        <div>
                                            <p id='c-p-n'>{data.name}</p>
                                            {data.attributes.map((e, i) => {
                                                if (e.name !== 'Color') {
                                                    return (
                                                        <div key={i}>
                                                            <p className='bold upper'>{e.name}:</p>
                                                            <div className='d-flex' style={{ marginBottom: '15px' }} >
                                                                <div>
                                                                    <svg width="29" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="0.5" y="0.5" width="23" height="23" fill="white" fill-opacity="0.2" stroke="#1D1F22" />
                                                                        <path d="M4.97758 17L7.65158 12.254L5.15958 7.816H6.44758L7.69358 10.168C7.81491 10.3733 7.92691 10.5787 8.02958 10.784C8.14158 10.9893 8.26758 11.2273 8.40758 11.498H8.46358C8.59425 11.2273 8.70625 10.9893 8.79958 10.784C8.90225 10.5787 9.00958 10.3733 9.12158 10.168L10.3396 7.816H11.5716L9.06558 12.31L11.7396 17H10.4516L9.10758 14.522C8.98624 14.298 8.86025 14.0693 8.72958 13.836C8.60824 13.5933 8.47291 13.332 8.32358 13.052H8.26758C8.13691 13.332 8.01091 13.5933 7.88958 13.836C7.76824 14.0693 7.65158 14.298 7.53958 14.522L6.20958 17H4.97758ZM15.5619 17.168C14.9179 17.168 14.3206 17.0467 13.7699 16.804C13.2192 16.552 12.7432 16.2207 12.3419 15.81L13.0419 14.998C13.3686 15.3433 13.7512 15.6233 14.1899 15.838C14.6379 16.0433 15.0999 16.146 15.5759 16.146C16.1826 16.146 16.6539 16.0107 16.9899 15.74C17.3259 15.46 17.4939 15.096 17.4939 14.648C17.4939 14.3307 17.4239 14.0787 17.2839 13.892C17.1532 13.7053 16.9712 13.5467 16.7379 13.416C16.5139 13.2853 16.2572 13.1547 15.9679 13.024L14.6519 12.45C14.3626 12.3287 14.0732 12.17 13.7839 11.974C13.5039 11.778 13.2659 11.526 13.0699 11.218C12.8832 10.91 12.7899 10.532 12.7899 10.084C12.7899 9.61733 12.9112 9.202 13.1539 8.838C13.4059 8.46467 13.7512 8.17533 14.1899 7.97C14.6286 7.75533 15.1232 7.648 15.6739 7.648C16.2246 7.648 16.7332 7.75533 17.1999 7.97C17.6666 8.17533 18.0632 8.446 18.3899 8.782L17.7599 9.538C17.4799 9.26733 17.1672 9.05733 16.8219 8.908C16.4859 8.74933 16.1032 8.67 15.6739 8.67C15.1606 8.67 14.7452 8.79133 14.4279 9.034C14.1199 9.27667 13.9659 9.60333 13.9659 10.014C13.9659 10.3033 14.0406 10.546 14.1899 10.742C14.3486 10.9287 14.5446 11.0827 14.7779 11.204C15.0112 11.3253 15.2492 11.4373 15.4919 11.54L16.7939 12.1C17.1486 12.2493 17.4659 12.4313 17.7459 12.646C18.0352 12.8513 18.2639 13.108 18.4319 13.416C18.5999 13.7147 18.6839 14.0927 18.6839 14.55C18.6839 15.0353 18.5579 15.4787 18.3059 15.88C18.0539 16.272 17.6946 16.5847 17.2279 16.818C16.7612 17.0513 16.2059 17.168 15.5619 17.168Z" fill="#1D1F22" />
                                                                    </svg>

                                                                </div>
                                                                <div style={{ marginLeft: '5px' }}>
                                                                    <svg width="29" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="0.5" y="0.5" width="23" height="23" fill="#1D1F22" stroke="#1D1F22" />
                                                                        <path d="M12.0687 17.168C11.4247 17.168 10.8274 17.0467 10.2767 16.804C9.72608 16.552 9.25008 16.2207 8.84874 15.81L9.54874 14.998C9.87541 15.3433 10.2581 15.6233 10.6967 15.838C11.1447 16.0433 11.6067 16.146 12.0827 16.146C12.6894 16.146 13.1607 16.0107 13.4967 15.74C13.8327 15.46 14.0007 15.096 14.0007 14.648C14.0007 14.3307 13.9307 14.0787 13.7907 13.892C13.6601 13.7053 13.4781 13.5467 13.2447 13.416C13.0207 13.2853 12.7641 13.1547 12.4747 13.024L11.1587 12.45C10.8694 12.3287 10.5801 12.17 10.2907 11.974C10.0107 11.778 9.77274 11.526 9.57674 11.218C9.39008 10.91 9.29674 10.532 9.29674 10.084C9.29674 9.61733 9.41808 9.202 9.66074 8.838C9.91274 8.46467 10.2581 8.17533 10.6967 7.97C11.1354 7.75533 11.6301 7.648 12.1807 7.648C12.7314 7.648 13.2401 7.75533 13.7067 7.97C14.1734 8.17533 14.5701 8.446 14.8967 8.782L14.2667 9.538C13.9867 9.26733 13.6741 9.05733 13.3287 8.908C12.9927 8.74933 12.6101 8.67 12.1807 8.67C11.6674 8.67 11.2521 8.79133 10.9347 9.034C10.6267 9.27667 10.4727 9.60333 10.4727 10.014C10.4727 10.3033 10.5474 10.546 10.6967 10.742C10.8554 10.9287 11.0514 11.0827 11.2847 11.204C11.5181 11.3253 11.7561 11.4373 11.9987 11.54L13.3007 12.1C13.6554 12.2493 13.9727 12.4313 14.2527 12.646C14.5421 12.8513 14.7707 13.108 14.9387 13.416C15.1067 13.7147 15.1907 14.0927 15.1907 14.55C15.1907 15.0353 15.0647 15.4787 14.8127 15.88C14.5607 16.272 14.2014 16.5847 13.7347 16.818C13.2681 17.0513 12.7127 17.168 12.0687 17.168Z" fill="white" />
                                                                    </svg>

                                                                </div>
                                                                <div style={{ marginLeft: '5px' }}>
                                                                    <svg width="29" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="0.5" y="0.5" width="23" height="23" fill="white" fill-opacity="0.2" stroke="#1D1F22" />
                                                                        <path d="M8.17406 17V7.816H9.57406L11.3381 12.716C11.4501 13.0333 11.5574 13.3553 11.6601 13.682C11.7721 13.9993 11.8841 14.3167 11.9961 14.634H12.0521C12.1641 14.3167 12.2667 13.9993 12.3601 13.682C12.4627 13.3553 12.5701 13.0333 12.6821 12.716L14.4181 7.816H15.8321V17H14.7401V11.946C14.7401 11.5353 14.7587 11.0827 14.7961 10.588C14.8334 10.0933 14.8661 9.64067 14.8941 9.23H14.8381L14.1101 11.316L12.3741 16.076H11.6041L9.86806 11.316L9.14006 9.23H9.08406C9.11206 9.64067 9.14006 10.0933 9.16806 10.588C9.2054 11.0827 9.22406 11.5353 9.22406 11.946V17H8.17406Z" fill="#1D1F22" />
                                                                    </svg>

                                                                </div>
                                                                <div style={{ marginLeft: '5px' }}>
                                                                    <svg width="29" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="0.5" y="0.5" width="23" height="23" fill="white" fill-opacity="0.2" stroke="#1D1F22" />
                                                                        <path d="M9.8557 17V7.816H11.0177V16.006H15.0357V17H9.8557Z" fill="#1D1F22" />
                                                                    </svg>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                            {data.attributes.map((e, i) => {
                                                if (e.name === 'Color') {
                                                    return (
                                                        <div key={i}>
                                                            <p className='bold upper'>{e.name}</p>
                                                            <div className='d-flex'>
                                                                {e.items.map((e, i) => {
                                                                    return (
                                                                        <div key={i} style={{
                                                                            background: e.value, cursor: 'pointer',
                                                                            width: '30px', height: '30px', marginLeft: '5px'
                                                                        }}>

                                                                        </div>

                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div> </div>
                                                    )
                                                }
                                            })}

                                        </div>
                                    </div>
                                    <div style={{ marginTop: '20px' }}>

                                        <div>
                                            <p className='bold upper' style={{ marginBottom: '10px', fontSize: '14px' }}>
                                                DESCRIPTION:
                                            </p>
                                            <p className='bold'>
                                                {renderDescription()}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '20px' }}>

                                        <div>
                                            <p className='bold upper' style={{ marginBottom: '10px', fontSize: '14px' }}>
                                                PRICE:
                                            </p>
                                            <p className='bold'>
                                                {fetchCurrency()}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '50px' }}>
                                        <div>
                                            <button id='checkoutbtncheck' onClick={() => addItemToCart(data)}>
                                                ADD TO CART
                                            </button>
                                        </div>
                                        {/* <div>
                                            {data.description}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        currency_name: state.newCurrencyName.currencyName,
        cart_items: state.addToCart.newCartItem,

    };
};
export default connect(mapStateToProps, { addToCart })(ProductDescription);