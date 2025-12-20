import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Cpu, Globe, Layers, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span>ViewCreator<span className="text-primary">AI</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#blog" className="hover:text-foreground transition-colors">Blog</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary hidden sm:block">Sign In</a>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_var(--color-primary)]">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              V 2.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
            >
              Build the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                at the Speed of Thought
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10"
            >
              Experience the next evolution of software development. 
              ViewCreatorAI combines natural language processing with deep context awareness 
              to turn your ideas into production-ready code instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="h-12 px-8 rounded-full text-base bg-white text-black hover:bg-white/90 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]">
                Start Building Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                View Documentation
              </Button>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
              <img 
                src="/images/feature-dashboard.png" 
                alt="ViewCreatorAI Dashboard" 
                className="w-full h-auto rounded-xl opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Unleash Your Potential</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our platform provides the tools you need to build faster, smarter, and more efficiently than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="h-8 w-8 text-primary" />,
                  title: "AI-Powered Coding",
                  description: "Generate production-ready code from natural language descriptions with our advanced LLM integration."
                },
                {
                  icon: <Zap className="h-8 w-8 text-secondary" />,
                  title: "Instant Deployment",
                  description: "Push to production in seconds with our automated CI/CD pipelines and global edge network."
                },
                {
                  icon: <Layers className="h-8 w-8 text-accent" />,
                  title: "Full-Stack Scaffolding",
                  description: "Create entire application architectures including database, auth, and API layers in one click."
                },
                {
                  icon: <Globe className="h-8 w-8 text-blue-400" />,
                  title: "Global Edge Network",
                  description: "Your applications run close to your users with our distributed edge computing infrastructure."
                },
                {
                  icon: <Code2 className="h-8 w-8 text-green-400" />,
                  title: "Smart Refactoring",
                  description: "Automatically optimize and refactor your codebase for performance and maintainability."
                },
                {
                  icon: <Cpu className="h-8 w-8 text-purple-400" />,
                  title: "Context Awareness",
                  description: "Our AI understands your entire project context, making suggestions that actually make sense."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm group">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground/80">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">From Prompt to Product <br /> in Minutes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Stop wrestling with boilerplate and configuration. Focus on the logic and user experience while ViewCreatorAI handles the heavy lifting.
                </p>
                
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Describe Your Vision",
                      desc: "Simply tell ViewCreatorAI what you want to build using natural language."
                    },
                    {
                      step: "02",
                      title: "Review the Blueprint",
                      desc: "Our AI generates a comprehensive plan and architecture for your approval."
                    },
                    {
                      step: "03",
                      title: "Watch it Build",
                      desc: "See your application come to life in real-time as code is generated and deployed."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-black/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary p-[1px]">
                      <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">ViewCreator Assistant</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="block w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Online
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="bg-white/5 rounded-lg p-4 rounded-tl-none border border-white/5">
                      <p className="text-muted-foreground mb-2">User</p>
                      <p>Create a dashboard for a SaaS analytics platform with a dark theme, real-time charts, and user management.</p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-4 rounded-tr-none border border-primary/20">
                      <p className="text-primary mb-2">ViewCreatorAI</p>
                      <p className="mb-3">I'm on it. Here's the plan:</p>
                      <ul className="list-disc list-inside space-y-1 text-white/80">
                        <li>Scaffolding Next.js 14 project with TypeScript</li>
                        <li>Setting up Tailwind CSS with custom dark theme</li>
                        <li>Integrating Recharts for real-time data visualization</li>
                        <li>Implementing Clerk for authentication</li>
                        <li>Generating database schema for user metrics</li>
                      </ul>
                      <div className="mt-4 flex gap-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce"></div>
                        <div className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce delay-100"></div>
                        <div className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          <div className="container px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of developers who are already building faster and better with ViewCreatorAI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 rounded-full text-lg bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>ViewCreator<span className="text-primary">AI</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering developers to build the future with AI-assisted coding.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 ViewCreatorAI Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
