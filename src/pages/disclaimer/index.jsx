const disclaimer = [
  {
    title: "Medical Information Disclaimer",
    description:
      "The content on the Binisana Pharma website is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical condition or treatment. Binisana Pharma assumes no responsibility for actions taken based on the website's information.",
  },
  {
    title: "Limitation of Liability and Disclaimer of Warranties",
    description:
      "Your use of this website is at your own risk. The materials on this website are provided 'as is' without warranties of any kind, express or implied. Binisana Pharma is not liable for any damages caused by technical inaccuracies, errors, omissions, or the inability to use the materials, even if advised of the possibility of such damages.",
  },
  {
    title: "No Guarantee of Accuracy",
    description:
      "While Binisana Pharma strives to ensure the accuracy of the information on its website, it makes no guarantees or warranties about the completeness or reliability of the content. Users are responsible for verifying information independently.",
  },
  {
    title: "Changes to Disclaimer",
    description:
      "Binisana Pharma reserves the right to update or amend this disclaimer at any time. Changes are effective immediately upon being posted on the website. Users are encouraged to review this disclaimer periodically to stay informed.",
  },
  {
    title: "Contact Information",
    description:
      "For any questions or concerns about this disclaimer, please contact Binisana Pharma at info@binsinapharma.com.",
  },
];

const Index = () => {
  return (
    <div className='bg-gray-50 py-44 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Disclaimer</h1>
        <p className='text-gray-600 mb-6'>
          Welcome to Binisana Pharma. The information provided on this website
          is intended for informational purposes only and should not be used as
          a substitute for professional medical advice, diagnosis, or treatment.
          By accessing or using our website, you acknowledge and agree to the
          terms outlined in our Disclaimer. If you do not agree to these terms,
          please refrain from using our website.
        </p>

        <div className='space-y-4'>
          {disclaimer.map((term, index) => (
            <div key={index}>
              <h2 className='text-lg font-semibold text-gray-800'>
                {index + 1}. {term.title}
              </h2>
              <p className='text-gray-600 mt-2'>{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
