
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Marketplace = () => {
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
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Marketplace</h1>
                <p className="text-muted-foreground mt-2">
                  Browse available projects and find your next opportunity.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search projects..." className="pl-9" />
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Example project cards - in a real app these would be generated from data */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="rounded-xl border p-6 bg-card hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Web3 Dashboard Design</h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">0.5 ETH</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    Looking for an experienced designer to create a modern Web3 dashboard interface with wallet integration.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">React</span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">Tailwind</span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">Web3</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Posted 2 days ago</span>
                    <Button size="sm" asChild>
                      <Link to="/project/detail">View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
