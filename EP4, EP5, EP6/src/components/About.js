import React from "react"

export const About = () => {
  return (
    <div className='help-container'>
      <h1 className='help-title'>Help & Support</h1>
      <p className='help-intro'>
        Welcome to the Help & Support page! We're here to ensure your experience
        is smooth and hassle-free. Browse through the sections below to find
        answers to common questions or reach out to us directly for support.
      </p>

      <h2 className='help-section-title'>1. Getting Started</h2>
      <ul>
        <li>
          <strong>How do I sign up?</strong>
          <p>
            To sign up, click on the "Sign Up" button on the home screen. Fill
            in your details, verify your phone number, and you're all set!
          </p>
        </li>
        <li>
          <strong>How do I log in?</strong>
          <p>
            If you already have an account, click on the "Log In" button and
            enter your registered email or phone number along with the password.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>2. Placing an Order</h2>
      <ul>
        <li>
          <strong>How do I search for restaurants or dishes?</strong>
          <p>
            Use the search bar at the top of the homepage to find your favorite
            restaurants or dishes.
          </p>
        </li>
        <li>
          <strong>How do I place an order?</strong>
          <p>
            <ul>
              <li>Select the items you want from a restaurant's menu.</li>
              <li>Review your cart and proceed to checkout.</li>
              <li>Add your delivery address and choose a payment method.</li>
              <li>
                Confirm your order, and you’ll receive updates in real-time!
              </li>
            </ul>
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>3. Payments and Refunds</h2>
      <ul>
        <li>
          <strong>What payment methods are accepted?</strong>
          <p>
            We accept credit cards, debit cards, UPI, and popular digital
            wallets.
          </p>
        </li>
        <li>
          <strong>How do I apply a promo code?</strong>
          <p>
            Enter the promo code at checkout, and the discount will be applied
            automatically if valid.
          </p>
        </li>
        <li>
          <strong>How do I get a refund?</strong>
          <p>
            Refunds are initiated automatically for canceled orders or failed
            payments. It may take 5–7 business days for the amount to reflect in
            your account.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>4. Tracking Your Order</h2>
      <ul>
        <li>
          <strong>How can I track my order?</strong>
          <p>
            Once your order is placed, click on the "Track Order" button in the
            app to see real-time updates.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>5. Canceling or Modifying Orders</h2>
      <ul>
        <li>
          <strong>Can I cancel my order?</strong>
          <p>
            Yes, you can cancel your order before the restaurant starts
            preparing it. Go to "My Orders," select the order, and choose
            "Cancel."
          </p>
        </li>
        <li>
          <strong>Can I modify my order?</strong>
          <p>
            Unfortunately, orders cannot be modified once placed. You can cancel
            the order (if allowed) and place a new one.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>6. Account Management</h2>
      <ul>
        <li>
          <strong>How do I reset my password?</strong>
          <p>
            On the login screen, click "Forgot Password" and follow the
            instructions sent to your registered email or phone.
          </p>
        </li>
        <li>
          <strong>How do I update my profile details?</strong>
          <p>
            Navigate to the "Profile" section and edit your details like name,
            phone number, or delivery address.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>7. Support</h2>
      <ul>
        <li>
          <strong>Need further assistance?</strong>
          <p>Our support team is here to help! Contact us via:</p>
          <ul>
            <li>Email: support@swiggyclone.com</li>
            <li>Phone: +91-123-456-7890</li>
            <li>Live Chat: Available in the app under "Help & Support."</li>
          </ul>
        </li>
      </ul>

      <h2 className='help-section-title'>8. FAQs</h2>
      <ul>
        <li>
          <strong>Why is my order delayed?</strong>
          <p>
            Delays may occur due to bad weather, traffic, or restaurant rush
            hours. We’ll notify you of any updates.
          </p>
        </li>
        <li>
          <strong>How do I report an issue with my order?</strong>
          <p>
            Go to "My Orders," select the order, and click "Report an Issue."
            Fill out the details, and our team will resolve it promptly.
          </p>
        </li>
      </ul>

      <h2 className='help-section-title'>9. Feedback</h2>
      <p>
        Your feedback helps us improve! Let us know about your experience under
        the "Feedback" section in the app.
      </p>
    </div>
  )
}
