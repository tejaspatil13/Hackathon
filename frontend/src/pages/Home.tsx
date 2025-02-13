import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  LineChart, 
  Map, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shape Your Future with AI-Powered Insights
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Make informed decisions about your education and career path with our advanced AI predictions and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission-predictor"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Try Admission Predictor
            </Link>
            <Link
              to="/job-market"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explore Job Market
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Admission Predictor"
              description="Get personalized admission probability predictions based on your academic profile."
              link="/admission-predictor"
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Job Market Analysis"
              description="Explore current job market trends and discover opportunities in your field."
              link="/job-market"
            />
            <FeatureCard
              icon={<LineChart className="h-8 w-8" />}
              title="Career Guidance"
              description="Receive AI-powered career recommendations based on your skills and interests."
              link="/career-recommendation"
            />
            <FeatureCard
              icon={<Map className="h-8 w-8" />}
              title="Opportunity Mapping"
              description="Visualize educational and job opportunities across different regions."
              link="/opportunities"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="AI Assistant"
              description="Get instant answers to your education and career-related questions."
              link="/ai-assistant"
            />
            <div className="bg-indigo-600 rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
              <p className="mb-6">Join thousands of students making informed decisions about their future.</p>
              <Link
                to="/admission-predictor"
                className="inline-flex items-center text-white font-semibold hover:underline"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Partner Institutions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => (
  <Link to={link} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-indigo-600 font-semibold">
      Learn More <ArrowRight className="ml-2 h-5 w-5" />
    </div>
  </Link>
);

export default Home;