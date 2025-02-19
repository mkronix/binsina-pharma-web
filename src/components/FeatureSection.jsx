import { FaFileSignature, FaStore, FaUsers } from "react-icons/fa";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { AiOutlineGlobal } from "react-icons/ai";
import CardTitle from "./CardTitle";
import CardParagraph from "./CardParagraph";
import BorderTitle from "./BorderTitle";
import PropTypes from "prop-types";
import data from "../data/home.json";

const iconMap = {
  FaUsers: FaUsers,
  FaFileSignature: FaFileSignature,
  AiOutlineGlobal: AiOutlineGlobal,
  FaStore: FaStore,
};

const FeatureSection = () => {
  const { home } = data.binsinaPharma;

  return (
    <section className='md:px-16 px-6 md:pt-28 pt-12 flex justify-center items-center w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Text Content */}
        <div className='flex flex-col justify-start'>
          <div className='space-y-6'>
            <BorderTitle title={home.aboutBinsinaPharmaCollection.title} />
            <Heading
              title={home.aboutBinsinaPharmaCollection.heading}
              align='start'
            />
            {home.aboutBinsinaPharmaCollection.content?.map((item, index) => {
              return <Paragraph title={item.paragraph} key={index} />;
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {home.aboutBinsinaPharmaCollection.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return <FeatureCard key={index} {...feature} icon={Icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

const FeatureCard = ({ icon: Icon, title, description, isDefaultGradient }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all ${isDefaultGradient
          ? "bg-gradient-to-r from-brightColor to-[#1a1b26] text-white"
          : "bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26]"
        } group`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDefaultGradient
            ? "bg-white/20 backdrop-blur-sm"
            : "bg-blue-100 group-hover:bg-white/20"
          }`}
      >
        <Icon
          className={`w-6 h-6 ${isDefaultGradient
              ? "text-white"
              : "text-brightColor group-hover:text-white"
            }`}
        />
      </div>

      <CardTitle title={title} isDefaultGradient={isDefaultGradient} />
      <CardParagraph
        description={description}
        isDefaultGradient={isDefaultGradient}
      />
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDefaultGradient: PropTypes.bool,
};

FeatureCard.defaultProps = {
  isDefaultGradient: false,
};
