import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Users, Building2, Target, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Bridge the Gap Between{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Volunteers & NGOs
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Connect skilled volunteers with meaningful opportunities. Empower NGOs to find the talent they need to make a difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/register">

                {/* <Button size="lg" className="w-full gap-2 sm:w-auto">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Login
                </Button> */}

                
          {/* <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div> */}
          

              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              How SkillBridge Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, effective, and impactful
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 shadow-medium transition-all hover:shadow-large">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                For Volunteers
              </h3>
              <p className="text-muted-foreground">
                Share your skills, find opportunities that match your expertise, and make a real impact in your community.
              </p>
            </Card>

            <Card className="p-8 shadow-medium transition-all hover:shadow-large">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Building2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                For NGOs
              </h3>
              <p className="text-muted-foreground">
                Post opportunities, discover talented volunteers, and build a team that drives your mission forward.
              </p>
            </Card>

            <Card className="p-8 shadow-medium transition-all hover:shadow-large">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Make Impact
              </h3>
              <p className="text-muted-foreground">
                Together, create meaningful change. Every connection on SkillBridge helps build a better tomorrow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join thousands of volunteers and NGOs already making an impact through SkillBridge.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="gap-2">
                Join Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SkillBridge. Connecting volunteers with opportunities to make a difference.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
