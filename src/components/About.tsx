import { Award, Target, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-blue dark:text-white">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about technology and committed to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary-blue dark:text-white">
                Professional Background
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                It's Makezy tech innovation, a dedicated software developers and technology service providers with extensive experience in creating innovative digital solutions. My journey in technology has equipped us with the skills to transform ideas into reality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                From developing custom software systems to installing cutting-edge security solutions, we bring a comprehensive approach to every project. our expertise spans across web development, mobile applications, and hardware installations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in building lasting relationships with our clients by delivering quality work, maintaining open communication, and ensuring complete satisfaction with every project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-yellow to-secondary-orange p-8 rounded-xl shadow-lg text-white">
                <Target className="w-12 h-12 mb-4" />
                <h4 className="text-2xl font-bold mb-3">My Mission</h4>
                <p className="text-white/90">
                  To provide reliable, innovative, and affordable digital and technical solutions that empower businesses and individuals to succeed in the modern world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <Award className="w-10 h-10 mb-3 text-secondary-sky" />
                  <h5 className="font-bold text-lg mb-2 text-primary-blue dark:text-white">Quality First</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Excellence in every line of code and every installation
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <Zap className="w-10 h-10 mb-3 text-secondary-orange" />
                  <h5 className="font-bold text-lg mb-2 text-primary-blue dark:text-white">Fast Delivery</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Quick turnaround without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-blue to-primary-blue/90 dark:from-gray-900 dark:to-primary-blue rounded-xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Why Choose Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">3+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">30+</div>
                <p className="text-gray-200">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">100%</div>
                <p className="text-gray-200">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
