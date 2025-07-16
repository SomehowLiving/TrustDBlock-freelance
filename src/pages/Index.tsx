import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ConnectWalletModal } from "@/components/connect-wallet-modal";
import { Shield, Award, Scale, ChevronRight, FileCode } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-pattern py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Redefining Freelancing with Blockchain
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:mx-0 lg:text-base/relaxed xl:text-xl/relaxed">
                  Secure, transparent, and decentralized platform for freelancers and clients.
                  No intermediaries, lower fees, and trustless transactions.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link to="/signup?role=freelancer" className="gap-1">
                    Join as Freelancer <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/signup?role=client" className="gap-1">
                    Join as Client <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <div className="hidden md:block">
                  <ConnectWalletModal />
                </div>
              </div>
              <div className="md:hidden">
                <ConnectWalletModal />
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none relative">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-brand-purple to-brand-teal rounded-xl flex items-center justify-center overflow-hidden shadow-xl animate-float">
                <div className="absolute inset-0 bg-background/5 backdrop-blur-[2px]"></div>
                <div className="relative z-10 p-6 text-white">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                      <FileCode className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">Blockchain Powered</h3>
                      <p className="text-sm text-white/80">Secure & Transparent</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Milestone 1</span>
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Completed</span>
                      </div>
                      <div className="mt-2 font-medium">0.25 ETH</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Milestone 2</span>
                        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">In Progress</span>
                      </div>
                      <div className="mt-2 font-medium">0.35 ETH</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm">
                      <span>NFT Reputation Score</span>
                      <span className="font-medium">95/100</span>
                    </div>
                    <div className="mt-2 w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="bg-brand-teal h-full rounded-full" style={{width: "95%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 blur-3xl rounded-full bg-brand-purple/20 w-2/3 aspect-square -top-10 -left-10"></div>
              <div className="absolute -z-10 blur-3xl rounded-full bg-brand-teal/20 w-1/2 aspect-square -bottom-10 -right-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Revolutionary Features
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              TrustDBlock brings the power of blockchain to freelancing, providing unprecedented security, transparency, and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Smart Contract Escrow"
              description="Milestone-based secure payments with funds held in escrow until work is approved, eliminating payment disputes."
              gradient="purple-teal"
            />
            <FeatureCard
              icon={<Award className="h-6 w-6" />}
              title="NFT Reputation"
              description="Transparent and portable trust scores as NFTs. Your reputation follows you across the web3 ecosystem."
              gradient="teal-purple"
            />
            <FeatureCard
              icon={<Scale className="h-6 w-6" />}
              title="Decentralized Disputes"
              description="Unbiased on-chain resolution through community voting ensures fair outcomes for all parties involved."
              gradient="orange-purple"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Simple, secure, and transparent process from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                  <p className="text-muted-foreground">
                    Sign in with your crypto wallet. No email or password required.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Create or Find Projects</h3>
                  <p className="text-muted-foreground">
                    Post a job with milestones as a client, or find projects matching your skills.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Milestone Payments</h3>
                  <p className="text-muted-foreground">
                    Funds are locked in smart contracts and released only when work is approved.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Build Your NFT Reputation</h3>
                  <p className="text-muted-foreground">
                    Earn reputation points that are stored as NFTs, showcasing your skills and reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-purple/10 p-1">
                <div className="w-full h-full rounded-lg bg-card flex items-center justify-center overflow-hidden">
                  <div className="w-full max-w-md space-y-6 p-6">
                    <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-bold">Project Brief</h3>
                      <p className="text-sm text-muted-foreground">Smart contract based project</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="font-medium">Milestones</div>
                        <div className="rounded-md border bg-muted/50 p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Design Mockup</div>
                              <div className="text-sm text-muted-foreground">Due: 7 days</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">0.25 ETH</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Released</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Frontend Development</div>
                              <div className="text-sm text-muted-foreground">Due: 14 days</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">0.5 ETH</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">In Progress</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border bg-muted/50 p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Backend Integration</div>
                              <div className="text-sm text-muted-foreground">Due: 10 days</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">0.75 ETH</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Pending</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Budget</span>
                        <span className="font-medium">1.5 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span>Contract Active</span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 blur-3xl rounded-full bg-brand-purple/10 w-2/3 aspect-square top-0 right-0"></div>
              <div className="absolute -z-10 blur-3xl rounded-full bg-brand-teal/10 w-1/2 aspect-square bottom-0 left-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Real experiences from freelancers and clients who've embraced the future of work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard
              content="TrustDBlock eliminated payment concerns from my freelance career. The smart contract escrow system ensures I get paid for completed milestones without chasing clients."
              author="Alex Rivera"
              role="Web3 Developer"
            />
            <TestimonialCard
              content="As a client, I love the transparency. The milestone system makes it easy to track progress, and I only release funds when I'm satisfied with the work. It's fair for everyone."
              author="Sarah Johnson"
              role="Startup Founder"
            />
            <TestimonialCard
              content="My NFT reputation score has helped me win projects over competitors. Clients trust my work history because it's verified on the blockchain and can't be manipulated."
              author="Michael Chen"
              role="UI/UX Designer"
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-purple">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Transform How You Work?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">
              Join TrustDBlock and experience the future of freelancing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button size="lg" variant="outline" className="bg-white text-brand-purple hover:bg-white/90 hover:text-brand-purple border-white" asChild>
                <Link to="/signup?role=freelancer">
                  Join as Freelancer
                </Link>
              </Button>
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white" asChild>
                <Link to="/signup?role=client">
                  Join as Client
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
