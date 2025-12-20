import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Zap, BarChart3, Sparkles, Video, Image, Mic } from "lucide-react";
import { useLocation } from "wouter";

export default function Landing() {
  const [, setLocation] = useLocation();

  const platforms = [
    { name: "YouTube", color: "bg-red-500", icon: "▶" },
    { name: "TikTok", color: "bg-black", icon: "♪" },
    { name: "Instagram", color: "bg-pink-500", icon: "📷" },
    { name: "X", color: "bg-black", icon: "𝕏" },
    { name: "Facebook", color: "bg-blue-600", icon: "f" },
  ];

  const agents = [
    {
      name: "Content Agent",
      description: "Generate viral content ideas and scripts automatically",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      name: "Clipping Agent",
      description: "Extract viral moments from long-form videos",
      icon: <Video className="w-6 h-6" />,
    },
    {
      name: "Thumbnail Agent",
      description: "Create eye-catching thumbnails automatically",
      icon: <Image className="w-6 h-6" />,
    },
    {
      name: "Script Agent",
      description: "Write engaging scripts for any platform",
      icon: <Mic className="w-6 h-6" />,
    },
    {
      name: "YouTube Agent",
      description: "Optimize and publish to YouTube automatically",
      icon: <Video className="w-6 h-6" />,
    },
    {
      name: "TikTok Agent",
      description: "Create and publish TikTok content at scale",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      credits: "0",
      features: [
        "View-only access",
        "Limited dashboard",
        "No content creation",
        "Community support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$0",
      credits: "25",
      features: [
        "25 credits/month",
        "1 social connection",
        "Basic AI features",
        "Email support",
        "Content scheduling",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$20",
      credits: "500",
      features: [
        "500 credits/month",
        "5 social connections",
        "All AI features",
        "Priority support",
        "Analytics dashboard",
        "Agent automation",
      ],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Ultra",
      price: "$50",
      credits: "1,500",
      features: [
        "1,500 credits/month",
        "10 social connections",
        "Advanced AI features",
        "24/7 support",
        "Advanced analytics",
        "Custom agents",
        "API access",
      ],
      cta: "Start Ultra",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              VC
            </div>
            <span className="font-bold text-lg">ViewCreator</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition">
              Pricing
            </a>
            <a href="#" className="text-sm hover:text-primary transition">
              Docs
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setLocation("/dashboard")}>
              Sign In
            </Button>
            <Button onClick={() => setLocation("/dashboard")}>
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-red-500">Stop the Grind.</span>
              <br />
              <span className="text-blue-500">Deploy AI Agents.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect once. Agents run forever. Create viral content at scale across all platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setLocation("/dashboard")}>
              Start Creating
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={`${platform.color} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}
              >
                <span>{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container py-20 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          The Old Way vs. The New Way
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <Card className="p-8 border-red-200 bg-red-50/50">
            <h3 className="text-xl font-bold text-red-600 mb-6">❌ The Old Way</h3>
            <ul className="space-y-4">
              {[
                "Manually create content for each platform",
                "Spend hours editing and formatting",
                "Publish one platform at a time",
                "Manually track analytics",
                "No consistency across platforms",
                "Burnout from repetitive tasks",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* New Way */}
          <Card className="p-8 border-blue-200 bg-blue-50/50">
            <h3 className="text-xl font-bold text-blue-600 mb-6">✅ With ViewCreator</h3>
            <ul className="space-y-4">
              {[
                "AI agents create content automatically",
                "Instant optimization and formatting",
                "Publish to all platforms simultaneously",
                "Real-time cross-platform analytics",
                "Consistent brand voice everywhere",
                "Focus on strategy, not execution",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">6 Powerful AI Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each agent specializes in a different aspect of content creation, working together to
            automate your entire workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition">
              <div className="text-primary mb-4">{agent.icon}</div>
              <h3 className="font-bold mb-2">{agent.name}</h3>
              <p className="text-sm text-muted-foreground">{agent.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container py-20 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Manage all your content, agents, and analytics in one place
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-48 bg-slate-700/50 rounded h-64 space-y-2 p-4">
                  <div className="h-4 bg-slate-600 rounded w-20"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-3 bg-slate-600 rounded w-32"></div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-8 bg-slate-700/50 rounded w-48"></div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-slate-700/50 rounded p-4 h-24"></div>
                    ))}
                  </div>
                  <div className="bg-slate-700/50 rounded h-32"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works for you. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, i) => (
            <Card
              key={i}
              className={`p-6 flex flex-col ${
                tier.highlighted ? "border-2 border-primary ring-2 ring-primary/20 lg:scale-105" : ""
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <div className="text-sm text-primary font-medium mb-6">
                {tier.credits} credits/month
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="p-12 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Stop the Grind?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join 1,000+ creators who are using ViewCreator to automate their content creation and
            grow faster.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setLocation("/dashboard")}
          >
            Start Creating Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Agents</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">YouTube</a></li>
                <li><a href="#" className="hover:text-foreground">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ViewCreator. All rights reserved. Built with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
