'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiHeart, 
  FiUsers, 
  FiCalendar, 
  FiClock, 
  FiSmile,
  FiAward,
  FiGift,
  FiArrowRight
} from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const VolunteerPage = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const benefits = [
    {
      icon: FiHeart,
      title: 'Make Real Impact',
      description: 'See firsthand how your efforts bring joy and build community connections.'
    },
    {
      icon: FiUsers,
      title: 'Meet Amazing People',
      description: 'Connect with like-minded volunteers and community members from all walks of life.'
    },
    {
      icon: FiSmile,
      title: 'Have Fun',
      description: 'Volunteering with us is genuinely enjoyable – we believe in making service joyful.'
    },
    {
      icon: FiAward,
      title: 'Develop Skills',
      description: 'Gain experience in event planning, community outreach, and nonprofit operations.'
    },
    {
      icon: FiClock,
      title: 'Flexible Schedule',
      description: 'Choose opportunities that fit your schedule, from one-time events to ongoing commitments.'
    },
    {
      icon: FiGift,
      title: 'Volunteer Perks',
      description: 'Enjoy volunteer appreciation events, recognition, and exclusive community access.'
    },
  ];

  const opportunities = [
    {
      title: 'Event Support Team',
      time: '4-8 hours per event',
      commitment: 'Flexible',
      description: 'Help set up, run activities, and clean up at our community events. Perfect for people who love hands-on involvement.',
      tasks: ['Event setup and breakdown', 'Activity facilitation', 'Guest registration', 'Photography and social media'],
      skills: 'Enthusiasm, reliability, team player attitude',
      color: 'bg-teal'
    },
    {
      title: 'Program Coordinator',
      time: '5-10 hours per week',
      commitment: 'Ongoing',
      description: 'Take leadership in planning and executing specific programs like youth camps or senior activities.',
      tasks: ['Program planning', 'Volunteer coordination', 'Community outreach', 'Budget management'],
      skills: 'Leadership, organization, communication, planning experience preferred',
      color: 'bg-pink'
    },
    {
      title: 'Community Outreach',
      time: '3-5 hours per week',
      commitment: 'Flexible',
      description: 'Help us connect with new community members and spread awareness about our programs.',
      tasks: ['Social media content', 'Community presentations', 'Partnership development', 'Marketing materials'],
      skills: 'Communication, creativity, social media savvy, networking',
      color: 'bg-yellow'
    },
    {
      title: 'Administrative Support',
      time: '2-4 hours per week',
      commitment: 'Ongoing',
      description: 'Provide essential behind-the-scenes support that keeps our organization running smoothly.',
      tasks: ['Data entry', 'Email management', 'Donation processing', 'Research and documentation'],
      skills: 'Attention to detail, computer literacy, organization, confidentiality',
      color: 'bg-teal'
    },
    {
      title: 'Special Skills Volunteer',
      time: 'Project-based',
      commitment: 'As needed',
      description: 'Share your professional expertise to help us grow and improve our operations.',
      tasks: ['Web development', 'Graphic design', 'Legal advice', 'Financial planning', 'Photography'],
      skills: 'Professional expertise in relevant field',
      color: 'bg-pink'
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Explore Opportunities',
      description: 'Browse our volunteer roles and find what matches your interests and availability.'
    },
    {
      number: '02',
      title: 'Submit Application',
      description: 'Fill out our simple volunteer application form with your preferences and background.'
    },
    {
      number: '03',
      title: 'Attend Orientation',
      description: 'Join our fun orientation session to learn about our mission and meet the team.'
    },
    {
      number: '04',
      title: 'Start Making Impact',
      description: 'Begin your volunteer journey and start spreading joy in our community!'
    },
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative text-white py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/90 via-pink-700/85 to-rose-800/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-transparent to-pink-500/20"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 z-5 overflow-hidden">
            <motion.div 
              className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl"
              animate={{
                y: [0, 20, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
                <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent tracking-tight">
                  Join Our <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Volunteer</span> Family
                </h1>
                <p className="text-xl opacity-90 leading-relaxed mb-10 max-w-4xl mx-auto">
                  Be part of a movement that&apos;s bringing joy and building stronger communities. 
                  Your time, skills, and passion can make a real difference in people&apos;s lives.
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Link
                    href="#opportunities"
                    className="group relative overflow-hidden inline-flex items-center space-x-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get Started Today</span>
                    <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Why <span className="text-teal">Volunteer</span> With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Volunteering shouldn&apos;t feel like work – it should feel like being part of something amazing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-light-gray p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-6">
                    <benefit.icon className="text-teal" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section id="opportunities" className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Find Your Perfect <span className="text-yellow">Role</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have opportunities for every schedule, skill level, and interest. 
                Discover how you can make the biggest impact.
              </p>
            </motion.div>

            <div className="space-y-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedRole === opportunity.title ? 'ring-2 ring-teal' : ''
                  }`}
                  onClick={() => setSelectedRole(selectedRole === opportunity.title ? null : opportunity.title)}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-3 h-8 ${opportunity.color} rounded-full`}></div>
                          <h3 className="text-2xl font-bold text-charcoal">{opportunity.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">{opportunity.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <FiClock className="text-teal" size={16} />
                            <span className="text-gray-600">{opportunity.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FiCalendar className="text-pink" size={16} />
                            <span className="text-gray-600">{opportunity.commitment}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button className="w-full lg:w-auto bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink transition-colors duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {selectedRole === opportunity.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-8 border-t border-gray-200"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-charcoal mb-4">Typical Tasks</h4>
                            <ul className="space-y-2">
                              {opportunity.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                                  <span className="text-gray-600">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-charcoal mb-4">Skills & Requirements</h4>
                            <p className="text-gray-600">{opportunity.skills}</p>
                            
                            <div className="mt-6">
                              <Link
                                href="/contact"
                                className="inline-flex items-center space-x-2 bg-yellow text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-pink hover:text-white transition-all duration-300"
                              >
                                <span>Apply for This Role</span>
                                <FiArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                How to <span className="text-pink">Get Started</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting involved is easy! Here&apos;s our simple 4-step process to become a volunteer.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0">
                        <div className="w-3/4 h-full bg-teal"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Testimonials */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hear from Our <span className="text-yellow">Volunteers</span>
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                Real stories from real people who are making a difference in our community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Maria Rodriguez',
                  role: 'Event Support Volunteer',
                  quote: 'Volunteering with The Fun Project has given me so much joy. Seeing families come together and kids laughing – it reminds me why community matters.',
                  months: 8
                },
                {
                  name: 'David Chen',
                  role: 'Program Coordinator',
                  quote: 'I love the leadership opportunities here. I&apos;ve grown so much personally while helping create programs that truly impact people&apos;s lives.',
                  months: 14
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Community Outreach',
                  quote: 'The flexibility is amazing. I can volunteer around my work schedule, and every event feels like a celebration rather than work.',
                  months: 6
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-gray-600 italic leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-charcoal">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-teal font-semibold">
                        {testimonial.months} months volunteering
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-pink to-yellow">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Make a <span className="text-charcoal">Difference</span>?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Join hundreds of volunteers who are already spreading joy and building stronger communities. 
                Your journey starts with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-white text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-light-gray transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Volunteering Today
                </Link>
                <Link
                  href="/events"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  See Upcoming Events
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default VolunteerPage; 