
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectWalletModal } from "@/components/connect-wallet-modal";

const Connect = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Connect Your Wallet
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              To use TrustDBlock, you'll need to connect your Ethereum wallet. This allows you to interact with our smart contracts for secure payments and reputation management.
            </p>
          </div>
          
          <div className="bg-card border rounded-xl p-8 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold">Choose Your Wallet</h2>
                <p className="text-muted-foreground">
                  Select your preferred wallet to connect to TrustDBlock
                </p>
              </div>
              
              <div className="grid gap-4">
                <ConnectWalletModal />
              </div>
              
              <div className="pt-4 text-center text-sm text-muted-foreground">
                <p>New to Web3?</p>
                <a href="https://ethereum.org/wallets/" className="text-primary underline underline-offset-4" target="_blank" rel="noreferrer">
                  Learn how to set up your first wallet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Connect;
