import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { practicalInfo, usefulApps, importantNumbers } from '@/data/practical';
import { Info, Smartphone, Phone, AlertTriangle, CreditCard, Wifi, Shield, Globe } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Money & Banking': return CreditCard;
    case 'Communication': return Wifi;
    case 'Health & Safety': return Shield;
    case 'Culture & Customs': return Globe;
    case 'Shopping': return Info;
    default: return Info;
  }
};

export default function PracticalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Practical Information
          </h1>
          <p className="text-lg text-gray-600">
            Essential information for daily life in China
          </p>
        </div>

        {/* Practical Information Sections */}
        <div className="space-y-8">
          {practicalInfo.map((section) => {
            const IconComponent = getCategoryIcon(section.category);
            return (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl flex items-center">
                    <IconComponent className="h-6 w-6 mr-2 text-blue-600" />
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {section.items.map((item) => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          
                          <div className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <div key={idx} className="text-xs text-gray-500 flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                {detail}
                              </div>
                            ))}
                          </div>

                          {item.tips && item.tips.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <h4 className="text-xs font-medium text-gray-600 mb-1">Tips:</h4>
                              {item.tips.map((tip, idx) => (
                                <div key={idx} className="text-xs text-gray-500 flex items-start">
                                  <span className="text-yellow-600 mr-2">💡</span>
                                  {tip}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Section Tips */}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                        {section.category} Tips
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {section.tips.map((tip, idx) => (
                          <div key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-yellow-600 mr-2">💡</span>
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Useful Apps */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                Essential Apps
              </CardTitle>
              <CardDescription>
                Must-have apps for travelers in China
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {usefulApps.map((app, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{app.name}</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {app.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                    <div className="text-xs text-gray-500 mb-2">
                      <strong>Platforms:</strong> {app.platforms.join(', ')}
                    </div>
                    <div className="text-xs text-gray-500">
                      <strong>Features:</strong> {app.features.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Numbers */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-red-600" />
                Important Phone Numbers
              </CardTitle>
              <CardDescription>
                Emergency and essential contact numbers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {importantNumbers.map((number, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="bg-red-100 text-red-800 font-bold text-lg px-3 py-2 rounded mr-4">
                      {number.number}
                    </div>
                    <div>
                      <h3 className="font-semibold">{number.service}</h3>
                      <p className="text-sm text-gray-600">{number.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 