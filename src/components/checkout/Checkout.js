import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import paypal from "../../icons/paypal-icon.svg";
import bitcoin from "../../icons/bitcoin-icon.svg";
import visa from "../../icons/visa-icon.svg";
import dhl from "../../icons/dhl-icon.svg";
import fedx from "../../icons/fedex-icon.svg";
import staryellow from "../../icons/star-yellow.svg";
import startransparent from "../../icons/star-transparent.svg";
import comparesmall from "../../icons/compare-small.svg";
import removeicon from "../../icons/remove-icon.svg";
import img from "../../img/big-blog-img-2.png";

const Checkout = () => {
    return (
        <div className='container'>
            <div className='flex'>
                <Link className='text-gray-400	hover:text-gray-600' to="/">Homepage </Link>
                <p className="text-gray-400	mx-1">/</p>
                <p className="sel-cat"> Checkout page</p>
            </div>

            <section class="billing-order row">
                <section class="billing-form column">
                    <div class="billing-info step-form">
                        <h2 class="title">Billing info</h2>
                        <div class="caption-row row">
                            <p class="caption">Please enter your billing info</p>
                            <p>Step 1 of 5</p>
                        </div>
                        <form class="order-form" action="#" method="post">
                            <div class="row">
                                <label>
                                    <p class="label">First name</p>
                                    <input type="text" name="first-name" id="first-name" placeholder="First name" />
                                </label>
                                <label>
                                    <p class="label">Last name</p>
                                    <input type="text" name="last-name" id="last-name" placeholder="Last name" />
                                </label>
                            </div>

                            <div class="row">
                                <label>
                                    <p class="label">Email address</p>
                                    <input type="text" name="email" id="email" placeholder="Email address" />
                                </label>
                                <label>
                                    <p class="label">Phone number</p>
                                    <input type="text" name="phone" id="phone" placeholder="Phone number" />
                                </label>
                            </div>

                            <div class="row">
                                <label>
                                    <p class="label">Address</p>
                                    <input type="text" name="address" id="address" placeholder="Address" />
                                </label>
                                <label>
                                    <p class="label">Town / City</p>
                                    <input type="text" name="city" id="city" placeholder="Town or City" />
                                </label>
                            </div>

                            <div class="row">
                                <div class="select">
                                    <label for="country" class="select">
                                        <p class="label">State / Country</p>
                                    </label>
                                    <div class="input-div row">
                                        <p class="placeholder">Choose a state or Country</p>
                                        <input type="checkbox" name="country" id="country" />
                                        <div class="check-icon"></div>
                                    </div>
                                </div>
                                <label>
                                    <p class="label">ZIP/Postal code</p>
                                    <input type="text" name="postal-code" id="postal-code" placeholder="Postal code or ZIP" />
                                </label>
                            </div>

                            <div class="check-ship row">
                                <label class="ship-label row">
                                    <input type="checkbox" name="check-ship" />
                                    <div class="check-icon"></div>
                                    <p class="label">Ship to a different address?</p>
                                </label>
                            </div>
                        </form>
                    </div>

                    <div class="billing-method step-form">
                        <h2 class="title">Billing method</h2>
                        <div class="caption-row row">
                            <p class="caption">Please enter your payment method</p>
                            <p>Step 2 of 5</p>
                        </div>
                        <div class="radio-pay">
                            <div class="select-method row">
                                <label class="label-radio row">
                                    <input type="radio" name="select-method" />
                                    <div class="radio-icon"></div>
                                    <p class="radio-name">FedEx</p>
                                    <p class="plus-price">+32 USD</p>
                                    <p class="additional">Additional price</p>
                                    <img src={fedx} alt="FedEx" />
                                </label>
                            </div>

                            <div class="select-method row">
                                <label class="label-radio row">
                                    <input type="radio" name="select-method" />
                                    <div class="radio-icon"></div>
                                    <p class="radio-name">DHL</p>
                                    <p class="plus-price">+15 USD</p>
                                    <p class="additional">Additional price</p>
                                    <img src={dhl} alt="FedEx" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="payment-info step-form">
                        <h2 class="title">Payment method</h2>
                        <div class="caption-row row">
                            <p class="caption">Please enter your payment method</p>
                            <p>Step 3 of 5</p>
                        </div>
                        <div class="card-info pay-method">
                            <label class="label-radio row">
                                <input type="radio" name="select-payment" checked />
                                <div class="radio-icon"></div>
                                <p class="label">Credit card</p>
                                <img src={visa} alt="visa" class="pay-icon" />
                            </label>
                            <form class="payment card-form" action="#" method="get">
                                <div class="row-1 row">
                                    <label>
                                        <p class="label">Card number</p>
                                        <input type="text" name="card-number" placeholder="Card number" />
                                    </label>
                                </div>
                                <div class="bottom-row row">
                                    <label class="holder">
                                        <p class="label">Card holder</p>
                                        <input type="text" name="card-holder" placeholder="Card holder" />
                                    </label>
                                    <label class="date">
                                        <p class="label">Expiration date</p>
                                        <input type="text" name="expiration-date" placeholder="DD/MM/YY" />
                                    </label>
                                    <label class="cvc">
                                        <p class="label">CVC</p>
                                        <input type="text" name="cvc" placeholder="CVC" />
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div class="select-method pay-method">
                            <label class="label-radio row">
                                <input type="radio" name="select-payment" />
                                <div class="radio-icon"></div>
                                <p class="label">PayPal</p>
                                <img src={paypal} alt="paypal" class="pay-icon" />
                            </label>
                        </div>
                        <div class="select-method pay-method">
                            <label class="label-radio row">
                                <input type="radio" name="select-payment" />
                                <div class="radio-icon"></div>
                                <p class="label">Bitcoin</p>
                                <img src={bitcoin} alt="bitcoin" class="pay-icon" />
                            </label>
                        </div>
                    </div>

                    <div class="add-info step-form">
                        <h2 class="title">Additional informations</h2>
                        <div class="caption-row row">
                            <p class="caption">Need something else? We will make it for you!</p>
                            <p>Step 4 of 5</p>
                        </div>
                        <label class="text-label">
                            <p class="label">Order notes</p>
                            <textarea name="order-notes"
                                placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."></textarea>
                        </label>
                    </div>

                    <div class="confirmation">
                        <h2 class="title">Confirmation</h2>
                        <div class="caption-row row">
                            <p class="caption">We are getting to the end. Just few clicks and your order is ready!</p>
                            <p>Step 5 of 5</p>
                        </div>
                        <div class="check-ship row">
                            <label class="ship-label row">
                                <input type="checkbox" name="check-agree" />
                                <div class="check-icon"></div>
                                <p class="agree">I agree with sending an Marketing and newsletter emails. No spam,
                                    promissed!</p>
                            </label>
                        </div>
                        <div class="check-ship row">
                            <label class="ship-label row">
                                <input type="checkbox" name="check-agree" />
                                <div class="check-icon"></div>
                                <p class="agree">I agree with our <a href="/">terms and conditions</a> and <a
                                    href="/">privacy policy</a>.</p>
                            </label>
                        </div>
                        <div><a href="/" class="green-btn">Complete order</a></div>
                    </div>
                </section>

                <div class="flex1">
                    <section class="order-sum column">
                        <h2 class="title">Order Summary</h2>
                        <p class="caption">Price can change depending on shipping method and taxes of your state.</p>
                        <div class="order-product-card row">
                            <div class="column-1 column">
                                <div class="img-sub">
                                    <img src={img} alt="" />
                                </div>
                                <div class="speed-btn wish-btn row">
                                    <label class="check-wish row">
                                        <input type="checkbox" name="check-wish" />
                                        <div class="check-icon"></div>
                                        <p class="check-name">Wishlist</p>
                                    </label>
                                </div>
                                <div class="speed-btn compare-row row">
                                    <img src={comparesmall} alt="" />
                                    <p>Compare</p>
                                </div>
                                <div class="speed-btn remove-row row">
                                    <img src={removeicon} alt="" />
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div class="column-2 column">
                                <p class="product-title">Product title</p>
                                <div class="detail-row row">
                                    <p class="name">Farm:</p>
                                    <p class="value">Tharamis Farm</p>
                                </div>
                                <div class="detail-row row">
                                    <p class="name">Freshness:</p>
                                    <p class="value">1 day old</p>
                                </div>
                                <div class="stars row">
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={startransparent} alt="" />
                                </div>
                                <div class="price-div">
                                    <p class="price">36.99 USD</p>
                                    <p class="old-price">48.56 USD</p>
                                </div>
                            </div>
                            <div class="column-3">
                                <div class="count-block row">
                                    <input type="text" name="value" placeholder="1pcs" />
                                    <label class="check-count row">
                                        <input type="checkbox" name="check-count" />
                                        <p class="check-name">Pcs</p>
                                        <div class="check-icon"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="order-product-card row">
                            <div class="column-1 column">
                                <div class="img-sub"></div>
                                <div class="speed-btn wish-btn row">
                                    <label class="check-wish row">
                                        <input type="checkbox" name="check-wish" />
                                        <div class="check-icon"></div>
                                        <p class="check-name">Wishlist</p>
                                    </label>
                                </div>
                                <div class="speed-btn compare-row row">
                                    <img src={comparesmall} alt="" />
                                    <p>Compare</p>
                                </div>
                                <div class="speed-btn remove-row row">
                                    <img src={removeicon} alt="" />
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div class="column-2 column">
                                <p class="product-title">Product title</p>
                                <div class="detail-row row">
                                    <p class="name">Farm:</p>
                                    <p class="value">Tharamis Farm</p>
                                </div>
                                <div class="detail-row row">
                                    <p class="name">Freshness:</p>
                                    <p class="value">1 day old</p>
                                </div>
                                <div class="stars row">
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={staryellow} alt="" />
                                    <img src={startransparent} alt="" />
                                </div>
                                <div class="price-div">
                                    <p class="price">36.99 USD</p>
                                    <p class="old-price">48.56 USD</p>
                                </div>
                            </div>
                            <div class="column-3">
                                <div class="count-block row">
                                    <input type="text" name="value" placeholder="1pcs" />
                                    <label class="check-count row">
                                        <input type="checkbox" name="check-count" />
                                        <p class="check-name">Pcs</p>
                                        <div class="check-icon"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="total">
                            <div class="row">
                                <p>Subtotal</p>
                                <p>73.98 USD</p>
                            </div>
                            <div class="row">
                                <p>Tax</p>
                                <p>17% 16.53 USD</p>
                            </div>
                            <div class="row">
                                <p>Shipping</p>
                                <p>0 USD</p>
                            </div>
                        </div>

                        <div class="promo-input row">
                            <input type="text" name="value" placeholder="Apply promo code" />
                            <label class="check-count row">
                                <input type="checkbox" name="check-count" />
                                <p class="check-name">Apply now</p>
                            </label>
                        </div>

                        <div class="total-order row">
                            <div class="column">
                                <p class="total-caption">Total Order</p>
                                <p class="delivery-data">Guaranteed delivery day: June 12, 2020</p>
                            </div>
                            <p class="total-price">89.84 USD</p>
                        </div>
                    </section>
                </div>
            </section>


        </div>
    );
};

export default Checkout;