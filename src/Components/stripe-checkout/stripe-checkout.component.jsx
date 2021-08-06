import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutComponent = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JL9eLI6ctY5ZVZLtshT13Qg6nLsbs1HaKrTZimfy7YB7VcSOUmfiznKOy0azUph6APph7b4W90xGB3cgUkiD9ap00afgA3S5N";
    const onToken = token => {
        console.log(token);
        alert("Payment Successfull");
    }
    return(
        <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
    )
}
export default StripeCheckoutComponent;