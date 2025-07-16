
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="py-16 px-4 md:px-6 bg-gradient-to-br from-brand-purple/10 to-brand-teal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              About TrustDBlock
            </h1>
            <p className="text-xl text-muted-foreground">
              Our mission is to revolutionize how freelancers and clients collaborate through blockchain technology
            </p>
          </div>
        </div>
        
        <div className="py-16 px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                TrustDBlock was founded in 2023 by a team of blockchain developers and freelancers who experienced 
                firsthand the challenges of traditional freelance platforms: high fees, payment delays, and trust issues.
              </p>
              <p className="text-lg text-muted-foreground">
                We set out to build a platform that leverages blockchain technology to create a more transparent, 
                secure, and fair environment for freelancers and clients worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                We envision a future where freelancers have complete control over their work and earnings, 
                clients can trust the talent they hire, and both parties benefit from direct, trustless 
                interactions without intermediaries taking large cuts of their transactions.
              </p>
              <p className="text-lg text-muted-foreground">
                By building on blockchain technology, we're creating portable reputation systems and 
                transparent payment mechanisms that will redefine the future of work.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Core Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Transparency</h3>
                    <p className="text-muted-foreground">All actions, payments, and reputation scores are recorded on the blockchain for complete visibility.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Security</h3>
                    <p className="text-muted-foreground">Smart contracts ensure that funds are held securely and only released when work is completed.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Fairness</h3>
                    <p className="text-muted-foreground">Our decentralized dispute resolution system ensures unbiased outcomes when disagreements arise.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Community</h3>
                    <p className="text-muted-foreground">We're building a platform that's owned and governed by its users, giving power back to freelancers and clients.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">The Team</h2>
              <p className="text-lg text-muted-foreground">
                Our team consists of experienced blockchain developers, UI/UX designers, and former freelancers 
                who understand the challenges of the gig economy. We're backed by leading web3 investors who 
                share our vision for the future of work.
              </p>
              <p className="text-lg text-muted-foreground">
                We're always looking for talented individuals to join our mission. If you're passionate about 
                blockchain technology and revolutionizing the freelance economy, get in touch!
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-16 px-4 md:px-6 bg-muted">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Join the Revolution</h2>
            <p className="text-lg text-muted-foreground">
              Be part of the future of work with TrustDBlock's blockchain-powered freelancing platform.
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

export default About;
