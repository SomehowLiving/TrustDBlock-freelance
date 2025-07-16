
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Freelancer Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome to your freelancer dashboard. This page is currently under development.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Active Projects</h3>
              <p className="text-muted-foreground">No active projects yet.</p>
              <Button className="mt-4" asChild>
                <Link to="/marketplace">Find Projects</Link>
              </Button>
            </div>
            
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">NFT Reputation</h3>
              <p className="text-muted-foreground">Your reputation score will appear here after completing projects.</p>
            </div>
            
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Wallet</h3>
              <p className="text-muted-foreground">Connect your wallet to view your balance and transactions.</p>
              <Button className="mt-4" variant="outline">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
