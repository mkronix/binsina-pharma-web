const privacyPolicy = [
  {
    title: "Information We Collect",
    description:
      "We collect personal information (name, contact details, address, payment information), health-related data when necessary, and usage data (IP address, browser type, pages visited) to improve our services and fulfill your requests.",
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information is used to process and fulfill orders, communicate with you about inquiries, improve our services, and comply with legal obligations. We ensure your data is handled securely.",
  },
  {
    title: "Sharing Your Information",
    description:
      "We do not sell your information. It may be shared with service providers who assist us, regulatory bodies as required by law, or other parties with your consent.",
  },
  {
    title: "Data Security",
    description:
      "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "Your Rights",
    description:
      "You have the right to access, correct, or request deletion of your data, restrict or object to processing, and withdraw consent at any time without affecting prior lawful processing.",
  },
  {
    title: "Changes to This Privacy Policy",
    description:
      "We may update this Privacy Policy periodically. Changes will be effective upon posting on our website. Please review it regularly to stay informed.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions or concerns about this Privacy Policy, contact us at info@binsinapharma.com. We are committed to addressing your inquiries promptly.",
  },
];

const Index = () => {
  return (
    <div className='bg-gray-50 py-44 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>
          Privacy Policy
        </h1>
        <p className='text-gray-600 mb-6'>
          At Binisana Pharma, we are dedicated to safeguarding your privacy and
          ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, share, and protect your data. By
          using our website and services, you agree to the terms outlined in
          this Privacy Policy. If you do not agree, please refrain from using
          our website.
        </p>

        <div className='space-y-4'>
          {privacyPolicy.map((policy, index) => (
            <div key={index}>
              <h2 className='text-lg font-semibold text-gray-800'>
                {index + 1}. {policy.title}
              </h2>
              <p className='text-gray-600 mt-2'>{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
