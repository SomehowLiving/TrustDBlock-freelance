
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
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
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                  Manage your projects, payments, and freelancer relationships.
                </p>
              </div>
              
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Post New Project
              </Button>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">My Projects</h3>
              <p className="text-muted-foreground">You haven't posted any projects yet.</p>
              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Post New Project
              </Button>
            </div>
            
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Escrow Funds</h3>
              <p className="text-muted-foreground">No funds in escrow.</p>
              <Button className="mt-4" variant="outline">
                Fund Escrow
              </Button>
            </div>
            
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Payment History</h3>
              <p className="text-muted-foreground">View all your past transactions.</p>
              <Button className="mt-4" variant="outline" asChild>
                <Link to="/client/payments">
                  <CreditCard className="mr-2 h-4 w-4" />
                  View Payments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ClientDashboard;
