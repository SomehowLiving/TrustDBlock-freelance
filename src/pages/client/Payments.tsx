
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Eye, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ClientPayments = () => {
  const payments = [
    {
      id: 1,
      projectTitle: "E-commerce Website Redesign",
      freelancer: "Sarah Chen",
      amount: "2.5 ETH",
      status: "completed",
      date: "2024-06-01",
      transactionHash: "0x1234...5678"
    },
    {
      id: 2,
      projectTitle: "Mobile App UI/UX",
      freelancer: "Alex Rivera",
      amount: "1.8 ETH",
      status: "pending",
      date: "2024-06-10",
      transactionHash: "0x9876...5432"
    },
    {
      id: 3,
      projectTitle: "Smart Contract Audit",
      freelancer: "David Kim",
      amount: "3.2 ETH",
      status: "in_escrow",
      date: "2024-06-08",
      transactionHash: "0xabcd...efgh"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-700 border-green-300";
      case "pending":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
      case "in_escrow":
        return "bg-blue-500/20 text-blue-700 border-blue-300";
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      case "in_escrow":
        return "In Escrow";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/client/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 rounded-xl">
                <CreditCard className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Payment History</h1>
                <p className="text-muted-foreground">
                  Track your payments and transaction history
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {payments.map((payment) => (
              <Card key={payment.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{payment.projectTitle}</h3>
                      <Badge className={getStatusColor(payment.status)}>
                        {getStatusText(payment.status)}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Freelancer: {payment.freelancer}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {payment.date}
                      </div>
                      <div className="font-mono">
                        {payment.transactionHash}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-3">
                    <div className="text-2xl font-bold text-brand-purple">
                      {payment.amount}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Receipt
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {payments.length === 0 && (
            <Card className="p-12 text-center">
              <div className="space-y-4">
                <div className="mx-auto p-3 bg-muted rounded-full w-fit">
                  <CreditCard className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">No payments yet</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your payment history will appear here once you start hiring freelancers and making payments.
                  </p>
                </div>
                <Button asChild>
                  <Link to="/marketplace">Browse Freelancers</Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ClientPayments;
