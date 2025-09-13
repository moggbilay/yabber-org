import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, Download, FileText, Brain, Shield, Zap, Users, MessageSquare, Search, Globe, Send } from 'lucide-react';
import './App.css';
import yabberLogo from './assets/yabber-logo.svg';
import yabberLogoText from './assets/yabber-logo-text.svg';
import { translations } from './translations';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const t = translations[language];
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:support@yabberai.org?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: t.localAITitle,
      description: t.localAIDesc,
      color: "bg-blue-100 text-blue-600 border-blue-200"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.ollamaTitle,
      description: t.ollamaDesc,
      color: "bg-orange-100 text-orange-600 border-orange-200"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t.langchainTitle,
      description: t.langchainDesc,
      color: "bg-purple-100 text-purple-600 border-purple-200"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t.multiDocTitle,
      description: t.multiDocDesc,
      color: "bg-teal-100 text-teal-600 border-teal-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.workspacesTitle,
      description: t.workspacesDesc,
      color: "bg-pink-100 text-pink-600 border-pink-200"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t.ragTitle,
      description: t.ragDesc,
      color: "bg-green-100 text-green-600 border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t.privacyTitle,
      description: t.privacyDesc,
      color: "bg-indigo-100 text-indigo-600 border-indigo-200"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: t.installTitle,
      description: t.installDesc,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200"
    }
  ];

  const faqs = [
    {
      question: t.faq1Question,
      answer: t.faq1Answer
    },
    {
      question: t.faq2Question,
      answer: t.faq2Answer
    },
    {
      question: t.faq3Question,
      answer: t.faq3Answer
    },
    {
      question: t.faq4Question,
      answer: t.faq4Answer
    },
    {
      question: t.faq5Question,
      answer: t.faq5Answer
    },
    {
      question: t.faq6Question,
      answer: t.faq6Answer
    }
  ];

  const workspaceTypes = [
    { name: t.coding, icon: "💻", description: t.codingDesc, color: "bg-blue-50 border-blue-200" },
    { name: t.writing, icon: "✍️", description: t.writingDesc, color: "bg-orange-50 border-orange-200" },
    { name: t.novel, icon: "📚", description: t.novelDesc, color: "bg-purple-50 border-purple-200" },
    { name: t.academic, icon: "🎓", description: t.academicDesc, color: "bg-teal-50 border-teal-200" },
    { name: t.math, icon: "🔢", description: t.mathDesc, color: "bg-pink-50 border-pink-200" },
    { name: t.custom, icon: "⚙️", description: t.customDesc, color: "bg-green-50 border-green-200" }
  ];

  const stepItems = [
    {
      step: t.step1,
      title: t.step1Title,
      items: t.step1Items
    },
    {
      step: t.step2,
      title: t.step2Title,
      items: t.step2Items
    },
    {
      step: t.step3,
      title: t.step3Title,
      items: t.step3Items
    }
  ];

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 ${isRTL ? 'font-arabic' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        fontFamily: isRTL ? '"Noto Sans Arabic", "Cairo", "Amiri", "Tajawal", sans-serif' : 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <motion.div
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={yabberLogo} alt="Yabber" className="h-12 w-12" />
              <span className="text-2xl font-bold text-gray-900">

              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              {[
                { id: translations["en"].about, name: t.about, color: 'border-blue-500 text-blue-600' },
                { id: translations["en"].howToUse, name: t.howToUse, color: 'border-orange-500 text-orange-600' },
                { id: translations["en"].faq, name: t.faq, color: 'border-purple-500 text-purple-600' },
                { id: translations["en"].models, name: t.models, color: 'border-teal-500 text-teal-600' },
                { id: translations["en"].contact, name: t.contact, color: 'border-pink-500 text-pink-600' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id.toLowerCase().replace(/\s+/g, '')}`}
                  className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md ${item.color} bg-white hover:bg-gray-50`}
                >
                  {item.name}
                </a>
              ))}

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} px-4 py-2 border-2 border-gray-300 rounded-lg font-medium transition-all duration-200 hover:shadow-md bg-white hover:bg-gray-50 text-gray-700`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <button
                onClick={toggleLanguage}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-2 space-y-2">
              {[
                { id: translations["en"].about, name: t.about },
                { id: translations["en"].howToUse, name: t.howToUse },
                { id: translations["en"].faq, name: t.faq },
                { id: translations["en"].models, name: t.models },
                { id: translations["en"].contact, name: t.contact }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id.toLowerCase().replace(/\s+/g, '')}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}  {/* Display translated text */}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className={`max-w-7xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Large Logo Display */}
            <div className="mb-8">
              <img src={yabberLogoText} alt="Yabber" className="h-128 w-128 mx-auto mb-4" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="https://yabberai.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-purple-600"
              >
                {t.tryOnline}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${isRTL ? 'text-right' : 'text-left'} mb-16`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.aboutTitle}
            </h2>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t.aboutDescription}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.whatCanDo}</h4>
                    <p className="text-gray-600">
                      {t.whatCanDoDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.whyUse}</h4>
                    <p className="text-gray-600">
                      {t.whyUseDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.howAccess}</h4>
                    <p className="text-gray-600">
                      {t.howAccessDesc}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  {t.builtWith} <strong className="text-blue-600">Ollama</strong> {t.andFlexibility} <strong className="text-green-600">LangChain</strong>{t.robustSolution}
                </p>
              </div>

              <div className={`flex justify-center ${isRTL ? 'lg:order-first' : ''}`}>
                <div className="bg-gray-100 rounded-2xl p-8 w-full max-w-md">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🤖</div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.localProcessing}</h3>
                    <p className="text-gray-600">{t.dataStays}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="howtouse" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${isRTL ? 'text-right' : 'text-left'} mb-16`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.howToUseTitle}
            </h2>

            <div className="space-y-12">
              {stepItems.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    {step.step}: {step.title}
                  </h3>
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Workspace Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                {t.workspaceTypesTitle}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {workspaceTypes.map((workspace, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${workspace.color} p-4 rounded-lg border-2 hover:shadow-md transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <div className="text-3xl mb-2">{workspace.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{workspace.name}</h4>
                    <p className="text-xs text-gray-600">{workspace.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="models" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${isRTL ? 'text-right' : 'text-left'} mb-16`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.featuresTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.color} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${isRTL ? 'text-right' : 'text-left'} mb-16`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.faqTitle}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  className={`w-full px-6 py-4 ${isRTL ? 'text-right' : 'text-left'} flex justify-between items-center hover:bg-gray-50 transition-colors duration-200`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''
                      } ${isRTL ? 'ml-4' : 'mr-4'}`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-gray-100"
                  >
                    <p className={`text-gray-600 leading-relaxed pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.contactTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.contactDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t.namePlaceholder}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t.emailPlaceholder}
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.subjectPlaceholder}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.messagePlaceholder}
                  dir={isRTL ? 'rtl' : 'ltr'}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? t.sending : t.sendMessage}</span>
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center text-green-600 font-medium">
                  {t.successMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center text-red-600 font-medium">
                  {t.errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 sm:mb-0">
              &copy; 2025 Yabber. {t.allRights}
            </p>

            <div className="flex space-x-4">
              {/* LinkedIn Link */}
              <a
                href="https://sa.linkedin.com/in/ahmed-almogbil-9541a4192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/moggbilay/yabber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

