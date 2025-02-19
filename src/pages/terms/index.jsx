const terms = [
  {
    title: "Acceptance of Terms",
    description:
      "By using Binisana Pharma website, you agree to comply with these Terms of Use and all applicable laws. If you disagree, refrain from using the site.",
  },
  {
    title: "Modifications to Terms",
    description:
      "Binisana Pharma reserves the right to amend these Terms at any time. Continued use of the website implies acceptance of any updates.",
  },
  {
    title: "Lawful Use",
    description:
      "Users must use the website responsibly and lawfully without infringing others' rights or disrupting its functionality. Harassment, offensive content, or disruptive behavior is prohibited.",
  },
  {
    title: "Product Information Accuracy",
    description:
      "While Binisana Pharma aims for accurate product details, the company does not guarantee error-free content. Inaccuracies may occur, and remedies include returning products in unused condition.",
  },
  {
    title: "Limitation of Liability",
    description:
      "Binisana Pharma is not liable for indirect, incidental, or consequential damages, including loss of data, profits, or goodwill, arising from the use of its website.",
  },
  {
    title: "Website Modifications and Availability",
    description:
      "Binisana Pharma may update or restrict access to its website without prior notice to enhance user experience or for maintenance purposes.",
  },
  {
    title: "Governing Law",
    description:
      "These Terms are governed by the laws of India, specifically Maharashtra, without regard to conflicts of law provisions.",
  },
  {
    title: "Contact Information",
    description:
      "For queries or concerns, users can contact Binisana Pharma at info@binsinapharma.com.",
  },
];

const Index = () => {
  return (
    <main className='bg-gray-50 py-60 px-4 sm:px-6 lg:px-8'>
      <section className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Terms of Use</h1>
        <p className='text-gray-600 mb-6'>
          Welcome to Binisana Pharma. These Terms of Use govern your use of our
          website and services. By accessing or using our website, you agree to
          comply with these Terms of Use. If you do not agree to these terms,
          please do not use our website.
        </p>

        <div className='space-y-4'>
          {terms.map((term, index) => (
            <div key={index}>
              <h2 className='text-lg font-semibold text-gray-800'>
                {index + 1}. {term.title}
              </h2>
              <p className='text-gray-600 mt-2'>{term.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
