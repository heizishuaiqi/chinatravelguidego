import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { emergencyInfo, emergencyPhrases, emergencyKit, safetyTips } from '@/data/emergency';
import { Phone, AlertTriangle, Shield, Hospital, Building, MessageCircle, Package, Info } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Emergency Services': return Phone;
    case 'Medical Services': return Hospital;
    case 'Diplomatic Services': return Building;
    case 'Lost & Stolen Items': return Shield;
    case 'Natural Disasters': return AlertTriangle;
    case 'Transportation': return Info;
    default: return AlertTriangle;
  }
};

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Information
          </h1>
          <p className="text-lg text-gray-600">
            Important contacts and emergency procedures
          </p>
        </div>

        {/* Emergency Information Sections */}
        <div className="space-y-8">
          {emergencyInfo.map((section) => {
            const IconComponent = getCategoryIcon(section.category);
            return (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-xl flex items-center">
                    <IconComponent className="h-6 w-6 mr-2 text-red-600" />
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contacts */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-blue-600" />
                        Contact Information
                      </h3>
                      <div className="space-y-3">
                        {section.contacts.map((contact, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">{contact.name}</h4>
                              <span className="bg-red-100 text-red-800 font-bold px-2 py-1 rounded text-sm">
                                {contact.phone}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{contact.description}</p>
                            <p className="text-xs text-blue-600">
                              Available: {contact.availability}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Procedures and Tips */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Info className="h-5 w-5 mr-2 text-green-600" />
                          Procedures
                        </h3>
                        <ol className="space-y-1">
                          {section.procedures.map((procedure, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-600 mr-2 font-medium">{idx + 1}.</span>
                              {procedure}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                          Tips
                        </h3>
                        <ul className="space-y-1">
                          {section.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-yellow-600 mr-2">💡</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Phrases */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-blue-600" />
                Essential Emergency Phrases
              </CardTitle>
              <CardDescription>
                Important phrases to communicate in emergencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyPhrases.map((phrase, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{phrase.english}</span>
                      <span className="text-sm text-blue-600">{phrase.pinyin}</span>
                    </div>
                    <div className="text-lg font-bold text-red-600">{phrase.chinese}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Kit */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-6 w-6 mr-2 text-green-600" />
                Emergency Kit Essentials
              </CardTitle>
              <CardDescription>
                Items to keep readily available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emergencyKit.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-green-600 mr-3">📦</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Tips */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-purple-600" />
                General Safety Tips
              </CardTitle>
              <CardDescription>
                Prevention and preparedness advice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-purple-600 mr-2">🛡️</span>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-red-50 p-6 rounded-lg border-2 border-red-200">
          <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2" />
            Quick Emergency Reference
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">110</div>
              <div className="text-sm text-gray-700">Police</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">120</div>
              <div className="text-sm text-gray-700">Medical</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">119</div>
              <div className="text-sm text-gray-700">Fire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">122</div>
              <div className="text-sm text-gray-700">Traffic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 