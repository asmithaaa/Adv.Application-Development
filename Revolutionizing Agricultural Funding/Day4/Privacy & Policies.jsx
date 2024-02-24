import'../assets/css/Privacy & Policies.css'
import image from'../assets/images/P&P.jpg'

const PrivacyPolicies = () => {
  return (
    <div className="privacy-policies">
      <div className="content">
        <h1>Privacy & Policies</h1>
        <p>
          At Revolutionizing Agricultural Funding, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and disclose information when you use our website or services.
        </p>
        <p>
          By using our website or services, you consent to the collection, use, and disclosure of your personal information in accordance with this policy.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
        </p>
        <p>
          The information we collect may include your name, email address, phone number, and other personal information.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide you with our services, to contact you regarding your order or inquiry, and to send you promotional emails about our products and services.
        </p>
        <h2>How We Disclose Your Information</h2>
        <p>
          We may disclose your personal information to third-party service providers who perform services on our behalf, such as payment processing, shipping, and data analysis.
        </p>
        <p>
          We may also disclose your personal information if required by law or if we believe that such disclosure is necessary to protect our rights, property, or safety.
        </p>
        <h2>Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact us at [support@revagfunding.com](mailto:support@revagfunding.com).
        </p>
      </div>
      <div className="image-container">
        <img src={image} alt="Logo Image"/>
      </div>
    </div>
  );
};

export default PrivacyPolicies;