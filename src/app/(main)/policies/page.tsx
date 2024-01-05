// ContactPage.js
import Head from 'next/head';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const PoliciesPages = () => {
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Privacy and Data Handling Policy</title>
        {/* Agrega aquí otros metadatos según sea necesario */}
      </Head>

      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Privacy and Data Handling Policy</h1>

        <p className="mb-4">
          <strong>1. Collection of Amazon Data:</strong> 
          We collect Amazon data for the sole purpose of facilitating business operations, enhancing user experience, and providing relevant services. This data may include but is not limited to customer information, transaction details, and preferences.
        </p>

        <p className="mb-4">
          <strong>2. Processing of Amazon Data:</strong> 
          Amazon data is processed securely and transparently, ensuring that it is accurate, relevant, and necessary for the intended purposes. We adhere to data minimization principles, processing only the information essential for the specified functions.
        </p>

        <p className="mb-4">
          <strong>3. Storage of Amazon Data:</strong> 
          All Amazon data is stored on secure servers with access restricted to authorized personnel only. We implement robust technical and organizational measures to safeguard data integrity, confidentiality, and availability.        
        </p>

        <p className="mb-4">
          <strong>4. Use of Amazon Data:</strong> 
          Amazon data is utilized solely for the purpose for which it was collected. This may include order fulfillment, customer support, and service improvement. Under no circumstances will the data be used for unauthorized or unethical purposes.
        </p>

        <p className="mb-4">
          <strong>5. Sharing of Amazon Data:</strong> 
          We may share Amazon data with trusted third-party service providers or partners when necessary for business operations. Such sharing is conducted under contractual agreements that ensure data protection and compliance with privacy regulations.
        </p>

        <p className="mb-4">
          <strong>6. Disposal of Amazon Data:</strong> 
          Amazon data is disposed of in a secure and irreversible manner when it is no longer needed for its original purpose, or when a user requests its deletion. Disposal methods comply with environmental regulations and data protection standards.
        </p>

        <p className="mb-4">
          <strong>7. Data Security:</strong> 
          We implement industry-standard security measures to protect Amazon data from unauthorized access, disclosure, alteration, and destruction. This includes encryption, access controls, and regular security assessments.
        </p>

        <p className="mb-4">
          <strong>8. User Rights:</strong> 
          Users have the right to access, correct, or delete their Amazon data. Requests for such actions can be submitted through designated channels, and we will respond promptly in accordance with applicable laws.
        </p>

        <p className="mb-4">
          <strong>9. Compliance with Laws:</strong> 
          Our organization is committed to complying with all relevant data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and any other applicable regional laws.
        </p>

        <p className="mb-4">
          <strong>10. Updates to the Policy:</strong> 
          This privacy and data handling policy will be reviewed regularly and updated as needed to reflect changes in business practices, technologies, and legal requirements. Users will be notified of any significant changes.        </p>

        {/* Agrega otras secciones según sea necesario */}

        <p className="mt-8 text-sm text-gray-600">
          This Privacy and Data Handling Policy was last updated on January 1, 2024.
        </p>
      </div>
    </div>
    </>
      );
};

export default PoliciesPages;
