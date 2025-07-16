import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ConnectWalletModal } from "@/components/connect-wallet-modal";
import { ChevronRight, User, Briefcase, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const freelancerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  skills: z.string().min(3, "Please add at least one skill"),
  hourlyRate: z.string().min(1, "Please provide your hourly rate"),
  portfolio: z.string().optional(),
});

const clientSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  companyName: z.string().min(2, "Company name is required"),
  industry: z.string().min(2, "Please specify your industry"),
  hiringInterests: z.string().min(3, "Please add your hiring interests"),
});

const Signup = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "freelancer";
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const schema = role === "freelancer" ? freelancerSchema : clientSchema;
  
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: role === "freelancer" 
      ? { username: "", bio: "", skills: "", hourlyRate: "", portfolio: "" } 
      : { username: "", bio: "", companyName: "", industry: "", hiringInterests: "" },
  });

  useEffect(() => {
    // Reset the form when the role changes
    form.reset(
      role === "freelancer" 
        ? { username: "", bio: "", skills: "", hourlyRate: "", portfolio: "" } 
        : { username: "", bio: "", companyName: "", industry: "", hiringInterests: "" }
    );
  }, [role, form]);

  const onSubmit = (values: z.infer<typeof schema>) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet before creating your profile",
        variant: "destructive",
      });
      return;
    }

    console.log(values);
    
    // In a real app, this would send the data to the backend
    toast({
      title: "Profile created!",
      description: `Your ${role} profile has been created successfully.`,
    });
    
    // Redirect to the appropriate dashboard
    navigate(role === "freelancer" ? "/freelancer/dashboard" : "/client/dashboard");
  };

  // Mock function to simulate wallet connection
  const handleWalletConnect = () => {
    setIsConnected(true);
    toast({
      title: "Wallet connected",
      description: "Your wallet has been connected successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-block p-2 bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 rounded-xl mb-4">
                {role === "freelancer" ? (
                  <User className="h-8 w-8 text-brand-purple" />
                ) : (
                  <Briefcase className="h-8 w-8 text-brand-teal" />
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join as {role === "freelancer" ? "Freelancer" : "Client"}
              </h1>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                {role === "freelancer" 
                  ? "Create your freelancer profile to start finding projects, building your reputation, and earning securely through smart contracts."
                  : "Set up your client account to post jobs, find talented freelancers, and manage projects with transparent blockchain-based payments."
                }
              </p>
            </div>

            {!isConnected && (
              <div className="bg-muted/30 rounded-xl p-6 text-center space-y-4 border border-dashed border-muted-foreground/30">
                <FileText className="h-8 w-8 mx-auto text-muted-foreground" />
                <h3 className="text-lg font-medium">Connect Your Wallet First</h3>
                <p className="text-muted-foreground">
                  To create your profile, you need to connect your wallet. This will be used for secure transactions and building your on-chain reputation.
                </p>
                <div className="pt-2" onClick={handleWalletConnect}>
                  <ConnectWalletModal />
                </div>
              </div>
            )}

            <div className={`space-y-8 ${!isConnected ? 'opacity-50 pointer-events-none' : ''}`}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-5">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your username" {...field} />
                            </FormControl>
                            <FormDescription>
                              This will be your public display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about yourself..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              A brief description about yourself or your work.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {role === "freelancer" ? (
                        <>
                          <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Skills</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., React, Web3, Design, Writing..." {...field} />
                                </FormControl>
                                <FormDescription>
                                  List your skills separated by commas.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="hourlyRate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Hourly Rate (ETH)</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    step="0.001" 
                                    min="0" 
                                    placeholder="0.05" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  Your preferred hourly rate in ETH.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="portfolio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Portfolio Link (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="https://..." {...field} />
                                </FormControl>
                                <FormDescription>
                                  Add a link to your portfolio or LinkedIn profile.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      ) : (
                        <>
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Technology, Finance, Healthcare..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="hiringInterests"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Hiring Interests</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe the type of talent you're looking to hire..." 
                                    className="min-h-[100px]"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  Skills, expertise and roles you're interested in hiring for.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                  </div>

                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    Create Profile <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>

              <div className="text-center text-sm text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
