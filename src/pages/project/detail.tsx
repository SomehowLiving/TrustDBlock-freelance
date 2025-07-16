
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/marketplace">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">Web3 Dashboard Design</h1>
                <Badge variant="outline" className="text-primary bg-primary/10 border-primary/20 px-3 py-1">
                  0.5 ETH
                </Badge>
              </div>
              <div className="flex items-center mt-2 text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">Deadline: 14 days</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Project Description</h2>
              <p className="text-muted-foreground">
                Looking for an experienced designer to create a modern Web3 dashboard interface with wallet integration.
                The dashboard should include portfolio tracking, transaction history, and NFT gallery sections.
                Experience with React, Tailwind CSS, and Web3 libraries is required. The final deliverable
                should be a fully responsive design with clean, maintainable code.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Web3.js</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Responsive Design</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Milestones</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Initial Wireframes</h3>
                      <span className="text-sm">0.1 ETH</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Basic layout and component design</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">UI Components</h3>
                      <span className="text-sm">0.2 ETH</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Develop all required UI components</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Final Delivery</h3>
                      <span className="text-sm">0.2 ETH</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete dashboard with all features and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About the Client</h2>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  BC
                </div>
                <div>
                  <h3 className="font-medium">BlockchainCo</h3>
                  <p className="text-sm text-muted-foreground">Member since May 2023 • 4 completed projects</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg">Apply for this Project</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
