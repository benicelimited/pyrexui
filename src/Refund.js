import React from 'react';
import './index.css'
const RefundPolicy = () => {
  return (
    <body>
         <div className="col-lg-12 text-center wow slideInDown" style={{animationduration: '2s', visibility: "visible", animationName: "slideInLeft", color:'gold'}}>
            <h1>Refund Policy</h1>
            <p>
                At [Your Company Name], we strive to provide the best service to our customers. However, we understand that there may be instances where you need to request a refund. This refund policy outlines the conditions and procedures for refund requests.
            </p>
            <h2>Refund Eligibility</h2>
            <p>
                In order to be eligible for a refund, you must meet the following criteria:
            </p>
            <ul>
                <li>Refund requests must be made within 30 days of the initial purchase date.</li>
                <li>Proxy services must not have been used or accessed.</li>
                <li>Your reason for requesting a refund must fall within one of the acceptable refund categories listed below.</li>
            </ul>
            <h2>Acceptable Refund Categories</h2>
            <p>
                Refunds will be considered in the following cases:
            </p>
            <ul>
                <li>Technical Issues: If you encounter any technical issues that prevent you from using our proxy services, we will investigate and, if appropriate, issue a refund.</li>
                <li>Unavailability: In the event that our proxy services are unavailable or inaccessible for a prolonged period of time, you may request a refund.</li>
                <li>Duplicate Purchase: If you accidentally make duplicate purchases of our proxy services, please notify us immediately for a refund of the duplicate transaction.</li>
            </ul>
            <h2>Refund Procedure</h2>
            <p>
                To request a refund, please contact our customer support team at [email protected] or call our helpline at XXX-XXXX. Provide your purchase details and the reason for your refund request. Our team will review your request and respond within 48 hours.
            </p>
            <p>
                If your refund request is approved, the refund will be issued using the original method of payment. Please note that it may take a few business days for the refund to be reflected in your account.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our refund policy, please don't hesitate to contact us at [email protected] We are here to assist you.
            </p>
        </div>
    </body>
  );
};

export default RefundPolicy;
