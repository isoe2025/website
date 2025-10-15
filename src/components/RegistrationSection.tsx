import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Users, ExternalLink } from 'lucide-react';

const RegistrationSection: React.FC = () => {

  const instructions = [
    'Complete all required fields in the registration form',
    'Select your appropriate category (UG/ PG student, Ph.D scholar or Industry professional)',
    'Upload your abstract for paper presentation/ project exhibition',
    'Registration confirmation will be sent via email',
    'Bring a valid ID and registration confirmation to the venue'
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Registration Instructions */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Registration Instructions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontWeight: 'bolder' }}>
            Please read the following instructions carefully before proceeding with your registration
          </p>
        </div>

        <div className="flex justify-center px-4 sm:px-0">
          <Card className="shadow-card max-w-2xl w-full">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <AlertCircle className="h-5 w-5" />
                Important Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-semibold text-base leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <br/>
      <br/>      

      {/* Registration Button */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Ready to join ISoE 2025? Click the button below to access our Google Form and complete your registration.
          </p>
        </div>

        <div className="flex justify-center px-4 sm:px-0">
          <Card className="shadow-2xl max-w-2xl w-full border-0 bg-gradient-to-br from-background via-secondary/20 to-background">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-10 w-10 text-accent animate-glow" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Join ISoE 2025</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Register now to be part of this prestigious international symposium and connect with leading researchers, academicians, and industry professionals from around the world.
                </p>
              </div>
              
              <Button
                onClick={() => window.open('https://forms.gle/Ua3kY5YwftjPpsiz5', '_blank')}
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6 rounded-xl hover:scale-105 w-full sm:w-auto"
                size="lg"
              >
                <ExternalLink className="h-6 w-6 mr-3" />
                Register Now
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Registration opens in a new tab
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RegistrationSection;