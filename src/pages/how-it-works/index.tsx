
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="py-16 px-4 md:px-6 bg-gradient-to-br from-brand-purple/10 to-brand-teal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              How TrustDBlock Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure, transparent and fair freelancing powered by blockchain technology
            </p>
          </div>
        </div>
        
        <div className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">1</div>
                <h2 className="text-3xl font-bold tracking-tighter">Create Your Profile</h2>
                <p className="text-lg text-muted-foreground">
                  Start by connecting your wallet and creating your profile. Choose your role as a freelancer or client, add your skills or requirements, and set up your on-chain identity.
                </p>
                <Button asChild className="mt-2">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="bg-muted aspect-video rounded-lg flex items-center justify-center order-1 md:order-2">
                <div className="text-4xl">🧑‍💻</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                <div className="text-4xl">📝</div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">2</div>
                <h2 className="text-3xl font-bold tracking-tighter">Post or Find Projects</h2>
                <p className="text-lg text-muted-foreground">
                  Clients can post projects with clear milestones and budgets. Freelancers can browse projects, filter by skills or budget, and apply to those that match their expertise.
                </p>
                <Button asChild className="mt-2">
                  <Link to="/marketplace">Browse Projects</Link>
                </Button>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">3</div>
                <h2 className="text-3xl font-bold tracking-tighter">Secure Escrow Payments</h2>
                <p className="text-lg text-muted-foreground">
                  Project funds are held in secure smart contracts. Payments are released automatically when milestones are verified as complete, ensuring freelancers get paid for their work.
                </p>
              </div>
              <div className="bg-muted aspect-video rounded-lg flex items-center justify-center order-1 md:order-2">
                <div className="text-4xl">🔒</div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                <div className="text-4xl">🏆</div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">4</div>
                <h2 className="text-3xl font-bold tracking-tighter">Build Your Reputation</h2>
                <p className="text-lg text-muted-foreground">
                  After completing projects, you earn NFT-based reputation tokens that showcase your skills and reliability. This on-chain reputation follows you across the web3 ecosystem.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">5</div>
                <h2 className="text-3xl font-bold tracking-tighter">Fair Dispute Resolution</h2>
                <p className="text-lg text-muted-foreground">
                  In case of disagreements, our decentralized dispute resolution system ensures fair and transparent outcomes through community governance and arbitration.
                </p>
              </div>
              <div className="bg-muted aspect-video rounded-lg flex items-center justify-center order-1 md:order-2">
                <div className="text-4xl">⚖️</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 px-4 md:px-6 bg-muted">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Join the future of work with TrustDBlock's secure, transparent freelancing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/signup?role=freelancer">Join as Freelancer</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/signup?role=client">Join as Client</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
