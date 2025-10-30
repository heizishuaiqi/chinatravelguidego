import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { transportationMethods, paymentMethods, transportationTips } from '@/data/transportation';
import { Train, Plane, Bus, Car, MapPin, Clock, DollarSign, Zap, AlertTriangle, CreditCard } from 'lucide-react';

const getTransportIcon = (type: string) => {
  switch (type) {
    case 'train': return Train;
    case 'plane': return Plane;
    case 'bus': return Bus;
    case 'taxi': return Car;
    case 'metro': return MapPin;
    default: return MapPin;
  }
};

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transportation in China
          </h1>
          <p className="text-lg text-gray-600">
            Complete guide to getting around China efficiently
          </p>
        </div>

        {/* Transportation Methods */}
        <div className="space-y-8">
          {transportationMethods.map((method) => {
            const IconComponent = getTransportIcon(method.type);
            return (
              <Card key={method.id} className="overflow-hidden">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl flex items-center">
                    <IconComponent className="h-6 w-6 mr-2 text-blue-600" />
                    {method.name}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Method Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            Coverage
                          </div>
                          <p className="text-sm font-medium">{method.coverage}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <DollarSign className="h-4 w-4 mr-1" />
                            Price Range
                          </div>
                          <p className="text-sm font-medium">{method.price}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Zap className="h-4 w-4 mr-1" />
                          Speed
                        </div>
                        <p className="text-sm font-medium">{method.speed}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 text-green-600">✓ Advantages</h3>
                        <ul className="space-y-1">
                          {method.advantages.map((advantage, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {advantage}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 text-red-600">✗ Disadvantages</h3>
                        <ul className="space-y-1">
                          {method.disadvantages.map((disadvantage, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-600 mr-2">•</span>
                              {disadvantage}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tips and Booking */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                          Tips
                        </h3>
                        <ul className="space-y-1">
                          {method.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-yellow-600 mr-2">💡</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                          Booking Information
                        </h3>
                        <ul className="space-y-1">
                          {method.bookingInfo.map((info, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {info}
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

        {/* Payment Methods */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-green-600" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                How to pay for transportation in China
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paymentMethods.map((method, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{method.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                    <div className="text-xs text-gray-500">
                      <p><strong>Coverage:</strong> {method.coverage}</p>
                      <p><strong>Setup:</strong> {method.setup}</p>
                      <p><strong>Advantages:</strong> {method.advantages.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transportation Tips */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                Important Transportation Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transportationTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-orange-600 mr-2">⚠️</span>
                    <span className="text-sm text-gray-700">{tip}</span>
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