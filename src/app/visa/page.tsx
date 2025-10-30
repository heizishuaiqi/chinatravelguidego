'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { visaFees, processingTimes, importantNotes } from '@/data/visa';
import { officialVisaData } from '@/data/official-visa-data';
import { Clock, DollarSign, FileText, AlertTriangle, Globe, CheckCircle, Shield, Info, UserCheck, GraduationCap, Heart, Building, Plane, ExternalLink } from 'lucide-react';

// Note: Metadata is now handled in the layout.tsx file due to client-side functionality

export default function VisaPage() {
  // Progress bar functionality
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  // Get visa types by category
  const visaTypesByCategory = {
    tourism: officialVisaData.visaTypes.filter(visa => visa.category === 'tourism'),
    business: officialVisaData.visaTypes.filter(visa => visa.category === 'business'),
    work: officialVisaData.visaTypes.filter(visa => visa.category === 'work'),
    study: officialVisaData.visaTypes.filter(visa => visa.category === 'study'),
    family: officialVisaData.visaTypes.filter(visa => visa.category === 'family'),
    transit: officialVisaData.visaTypes.filter(visa => visa.category === 'transit'),
    other: officialVisaData.visaTypes.filter(visa => visa.category === 'other')
  };

  // Icon mapping for categories
  const categoryIcons = {
    tourism: <Plane className="h-5 w-5" />,
    business: <Building className="h-5 w-5" />,
    work: <UserCheck className="h-5 w-5" />,
    study: <GraduationCap className="h-5 w-5" />,
    family: <Heart className="h-5 w-5" />,
    transit: <Globe className="h-5 w-5" />,
    other: <Info className="h-5 w-5" />
  };

  // Severity color mapping
  const severityColors = {
    critical: 'border-red-200 bg-red-50 text-red-800',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    info: 'border-blue-200 bg-blue-50 text-blue-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "China Visa Guide 2025",
            "description": "Complete guide to China visa requirements, types, and application process for international travelers",
            "url": "https://your-domain.com/visa",
            "mainEntity": {
              "@type": "GovernmentService",
              "name": "China Visa Application",
              "provider": {
                "@type": "GovernmentOrganization",
                "name": "Ministry of Foreign Affairs of the People's Republic of China"
              }
            }
          })
        }}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: '0%' }}
          id="progress-bar"
        />
      </div>

      {/* Floating TOC */}
      <div className="fixed top-24 right-4 z-50 hidden lg:block">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-48 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
            <FileText className="h-4 w-4 mr-1 text-blue-600" />
            Jump to Section
          </h3>
          <div className="space-y-1 text-xs">
            <a href="#visa-free" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <Shield className="h-3 w-3 mr-2" />
              Visa-Free
            </a>
            <a href="#visa-types" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <FileText className="h-3 w-3 mr-2" />
              Visa Types
            </a>
            <a href="#requirements" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <CheckCircle className="h-3 w-3 mr-2" />
              Requirements
            </a>
            <a href="#important-notes" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <AlertTriangle className="h-3 w-3 mr-2" />
              Important Notes
            </a>
            <a href="#fees-processing" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <DollarSign className="h-3 w-3 mr-2" />
              Fees & Processing
            </a>
            <a href="#faq" className="flex items-center text-gray-600 hover:text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors">
              <Info className="h-3 w-3 mr-2" />
              FAQ
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/travel-guide" className="hover:text-blue-600">Travel Guide</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">Visa Information</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            China Visa Guide 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete guide to China visa requirements, types, and application process for international travelers
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <Shield className="h-6 w-6 text-blue-600 mx-auto mb-3" />
              <div className="text-sm font-medium text-gray-900">Official Information</div>
              <div className="text-xs text-gray-500 mt-1">From China's MFA</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <CheckCircle className="h-6 w-6 text-blue-600 mx-auto mb-3" />
              <div className="text-sm font-medium text-gray-900">Updated December 2024</div>
              <div className="text-xs text-gray-500 mt-1">Latest information</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <Info className="h-6 w-6 text-blue-600 mx-auto mb-3" />
              <div className="text-sm font-medium text-gray-900">16 Visa Types</div>
              <div className="text-xs text-gray-500 mt-1">All categories covered</div>
            </div>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-light text-gray-900 mb-2">16</div>
            <div className="text-sm text-gray-600">Official Visa Types</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-light text-gray-900 mb-2">3</div>
            <div className="text-sm text-gray-600">Visa-Free Options</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-light text-gray-900 mb-2">4-5</div>
            <div className="text-sm text-gray-600">Processing Days</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-light text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries Covered</div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#visa-free" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Visa-Free Entry</div>
                    <div className="text-xs text-gray-500">3 different policies</div>
                  </div>
                </div>
              </a>
              
              <a href="#visa-types" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Visa Types</div>
                    <div className="text-xs text-gray-500">16 official categories</div>
                  </div>
                </div>
              </a>
              
              <a href="#requirements" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Requirements</div>
                    <div className="text-xs text-gray-500">Application documents</div>
                  </div>
                </div>
              </a>
              
              <a href="#important-notes" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <AlertTriangle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Important Notes</div>
                    <div className="text-xs text-gray-500">Critical warnings</div>
                  </div>
                </div>
              </a>
              
              <a href="#fees-processing" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <DollarSign className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fees & Processing</div>
                    <div className="text-xs text-gray-500">Costs and timelines</div>
                  </div>
                </div>
              </a>
              
              <a href="#faq" className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <Info className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">FAQ</div>
                    <div className="text-xs text-gray-500">Common questions</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Visa Application Process Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              Visa Application Process
            </h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-gray-200"></div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Choose Visa Type</h3>
                  <p className="text-sm text-gray-600">Determine the appropriate visa based on your purpose</p>
                </div>
                
                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-gray-200"></div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Prepare Documents</h3>
                  <p className="text-sm text-gray-600">Gather all required documents and forms</p>
                </div>
                
                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold">3</span>
                    </div>
                    <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-gray-200"></div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Submit Application</h3>
                  <p className="text-sm text-gray-600">Visit consulate or visa center to submit</p>
                </div>
                
                {/* Step 4 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold">4</span>
                    </div>
                    <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-gray-200"></div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Wait for Processing</h3>
                  <p className="text-sm text-gray-600">4-5 working days for standard processing</p>
                </div>
                
                {/* Step 5 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold">5</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Collect Visa</h3>
                  <p className="text-sm text-gray-600">Pick up your passport with visa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa-Free Policies */}
        <section id="visa-free" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Visa-Free Entry Policies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              China offers several visa-free entry options for eligible travelers. 
              Check if your country qualifies for any of these convenient policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officialVisaData.visaFreePolicies.map((policy, index) => {
              const policyIcons = [
                <Shield className="h-8 w-8 text-blue-600" />,
                <Globe className="h-8 w-8 text-blue-600" />,
                <Plane className="h-8 w-8 text-blue-600" />
              ];
              
              return (
                <Card key={index} className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center">
                      <div className="mb-4">
                        {policyIcons[index]}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{policy.description}</h3>
                      {policy.duration && (
                        <p className="text-blue-600 text-sm font-medium">
                          Duration: {policy.duration}
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.conditions.map((condition, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-blue-600" />
                          </div>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Official Visa Types */}
        <section id="visa-types" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Official Visa Types
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              China offers 16 official visa types categorized by purpose of visit. 
              Each type has specific requirements and validity periods.
            </p>
          </div>
          
          <div className="space-y-8">
            {Object.entries(visaTypesByCategory).map(([category, visas]) => {
              if (visas.length === 0) return null;
              
              return (
                <div key={category} className="mb-12">
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center capitalize">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                      <span className="ml-3">{category} Visas</span>
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {visas.length} visa type{visas.length > 1 ? 's' : ''} available in this category
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visas.map((visa) => (
                      <Card key={visa.code} className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-gray-900">{visa.name}</CardTitle>
                            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                              {visa.code}
                            </span>
                          </div>
                          {visa.duration && (
                            <CardDescription className="text-blue-600 font-medium flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Duration: {visa.duration}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {visa.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Requirements */}
        <section id="requirements" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Application Requirements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential documents and requirements for different types of visa applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officialVisaData.requirements.map((requirement, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{requirement.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requirement.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section id="important-notes" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Important Notes & Warnings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Critical information to avoid visa application issues and entry problems.
            </p>
          </div>
          
          <div className="space-y-4">
            {officialVisaData.importantNotes.map((note, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${severityColors[note.severity]}`}>
                <h3 className="font-semibold mb-2">{note.title}</h3>
                <p className="text-sm leading-relaxed">{note.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Refusal Reasons */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Situations Leading to Entry Refusal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common situations that result in denied boarding, entry refusal, or fines.
            </p>
          </div>
          
          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-lg text-red-800">
                Avoid These Situations
              </CardTitle>
              <CardDescription className="text-red-700">
                The following situations will result in denied boarding, entry refusal, or fines
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {officialVisaData.refusalReasons.map((reason, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-red-600 mr-2">❌</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>



        {/* Visa Fees and Processing Times */}
        <section id="fees-processing" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Visa Fees and Processing Times
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current visa fees by country and standard processing timeframes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visa Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                Visa Fees (USD)
              </CardTitle>
              <CardDescription>
                Fees vary by nationality and visa type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Country</th>
                      <th className="border border-gray-300 p-3 text-center">Single</th>
                      <th className="border border-gray-300 p-3 text-center">Double</th>
                      <th className="border border-gray-300 p-3 text-center">Multiple</th>
                      <th className="border border-gray-300 p-3 text-center">Express</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(visaFees).map(([countryCode, fees]) => (
                      <tr key={countryCode} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">{countryCode}</td>
                        <td className="border border-gray-300 p-3 text-center">${fees.single}</td>
                        <td className="border border-gray-300 p-3 text-center">${fees.double}</td>
                        <td className="border border-gray-300 p-3 text-center">${fees.multiple}</td>
                        <td className="border border-gray-300 p-3 text-center">${fees.express}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Processing Times */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-600" />
                Processing Times
              </CardTitle>
              <CardDescription>
                Standard processing times for visa applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(processingTimes).map(([type, time]) => (
                  <div key={type} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium capitalize mb-2">{type}</h3>
                    <p className="text-blue-600 font-semibold">{time}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Additional Notes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {importantNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common visa questions from travelers.
            </p>
          </div>
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 justify-center">
                <Info className="h-6 w-6 mr-2 text-blue-600" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold text-purple-900 mb-2">Q: My passport expires soon. Can I still travel?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> No, this will cause problems:<br />
                        • <strong>Requirement:</strong> Passport must be valid for at least 6 months<br />
                        • <strong>Risk:</strong> Entry refusal even with valid visa<br />
                        • <strong>Solution:</strong> Renew your passport before applying for visa
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-l-4 border-gray-500">
                      <h3 className="font-semibold text-gray-900 mb-2">Q: Can I work with a tourist visa?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> No, absolutely not:<br />
                        • <strong>Restriction:</strong> You cannot engage in activities unrelated to your visa purpose<br />
                        • <strong>Consequence:</strong> Deportation and entry ban<br />
                        • <strong>Correct process:</strong> Apply for work visa (Z) before working in China
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold text-blue-900 mb-2">Q: Can I extend my visa while in China?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> Yes, but with specific conditions:<br />
                        • <strong>Apply early:</strong> At least 7 days before expiry<br />
                        • <strong>Location:</strong> Local Public Security Bureau (PSB)<br />
                        • <strong>Requirements:</strong> Valid reason and supporting documents<br />
                        • <strong>Note:</strong> Not all visa types can be extended
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500">
                      <h3 className="font-semibold text-teal-900 mb-2">Q: What if my visa application is rejected?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> Common reasons and solutions:<br />
                        • <strong>Incomplete documents:</strong> Provide all required documents<br />
                        • <strong>Insufficient funds:</strong> Show adequate financial proof<br />
                        • <strong>Unclear purpose:</strong> Provide detailed travel itinerary<br />
                        You can reapply after addressing the issues.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-semibold text-orange-900 mb-2">Q: Do I need travel insurance for China visa?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> Not mandatory, but highly recommended:<br />
                        • <strong>Coverage:</strong> Medical expenses and emergencies<br />
                        • <strong>Benefit:</strong> May help with visa application<br />
                        • <strong>Peace of mind:</strong> Protects against unexpected costs<br />
                        • <strong>Tip:</strong> Some consulates appreciate seeing insurance
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                      <h3 className="font-semibold text-yellow-900 mb-2">Q: Can I apply for a visa online?</h3>
                      <p className="text-sm text-gray-700">
                        <strong>A:</strong> Limited online options:<br />
                        • <strong>Pre-application:</strong> Some consulates offer online forms<br />
                        • <strong>Appointment:</strong> Online scheduling for submission<br />
                        • <strong>In-person required:</strong> Must visit consulate/visa center<br />
                        • <strong>Documents:</strong> Physical submission still required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Official Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Official Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Always verify information with official government sources before traveling.
            </p>
          </div>
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 justify-center">
                <ExternalLink className="h-6 w-6 mr-2 text-blue-600" />
                Government Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-3">Official Websites</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href={officialVisaData.resources.website} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 hover:underline flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        China Consular Service Network
                      </a>
                    </li>
                    <li>
                      <a href={officialVisaData.resources.additionalInfo.visaFreeAgreements} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 hover:underline flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visa-Free Agreement List
                      </a>
                    </li>
                    <li>
                      <a href={officialVisaData.resources.additionalInfo.transitVisaFree} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 hover:underline flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Transit Visa-Free Policy
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-3">Government Departments</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• {officialVisaData.resources.department}</li>
                    <li>• {officialVisaData.resources.additionalInfo.immigrationBureau}</li>
                  </ul>
                  
                  <h3 className="font-semibold text-blue-800 mt-4 mb-2">Last Updated</h3>
                  <p className="text-sm text-blue-700">{officialVisaData.resources.lastUpdated}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Important Disclaimer</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              This information is based on official sources and is updated regularly. 
              However, visa policies can change without notice. Always verify current requirements with the 
              nearest Chinese consulate or embassy before traveling. We recommend checking the official 
              websites listed above for the most up-to-date information.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
} 