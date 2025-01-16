// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
//         Transform Your Business with Automaton
//       </h1>
//       <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
//         Unlock the power of automation. Double your productivity. Triple your results.
//       </p>
//       <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center">
//         Dominate your market with our cutting-edge Chatbot solutions. Elevate your sales
//         and marketing processes and say goodbye to mundane tasks. Time to scale!
//       </p>
//       <Link href="/payments">
//         <button className="text-2xl bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-transform transform hover:scale-105">
//           Get Started Now!
//         </button>
//       </Link>
//     </div>
//   );
// }

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transform Your Engagement with AI Automation
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
          Automaton empowers businesses to engage effortlessly across WhatsApp, Instagram DM, and Email. Our AI-driven platform ensures timely, context-aware responses that turn every interaction into a valuable opportunity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src="https://s3-bucket-my-chatbot-saas.s3.ap-southeast-1.amazonaws.com/hero-image.jpg"
            alt="AI Automation Platform"
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Smart Responses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium">Engage</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Smart Responses for Every Customer Interaction
              </h2>
              <p className="text-lg text-black">
                Automaton leverages advanced AI to provide context-aware responses that resonate with your audience. This ensures that every inquiry is met with timely and relevant engagement.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">AI-Powered</h3>
                <p className="text-lg text-black">
                  Transform customer inquiries into meaningful conversations with intelligent automation.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
                <p className="text-lg text-black">
                  Easily manage responses across multiple platforms for consistent customer engagement.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
              <Button size="lg">
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="aspect-square rounded-lg bg-muted">
            <Image
              src="https://s3-bucket-my-chatbot-saas.s3.ap-southeast-1.amazonaws.com/smart-responses.jpg"
              alt="Smart Responses Visualization"
              width={600}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Unlock the Power of Seamless Automation for Your Instagram Engagement
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 aspect-video w-full rounded-lg bg-muted">
                  <Image
                    src={`https://s3-bucket-my-chatbot-saas.s3.ap-southeast-1.amazonaws.com/feature-${index + 1}.jpg`}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-black mb-4">{feature.description}</p>
                <Button className="mt-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Transforming Customer Interactions into Strategic Business Opportunities with Automaton
        </h2>
        <p className="mb-8 text-center text-lg text-gray-700">
          Automaton revolutionizes the way businesses engage with their audience on Instagram. By automatically responding to direct messages with context-aware AI, we ensure timely and relevant communication. Our platform also initiates workflows based on user interactions, turning every engagement into a strategic touchpoint.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 aspect-square w-16 h-16 flex items-center justify-center rounded-lg bg-muted">
                  <Image
                    src="/placeholder.svg" // Replace with your icon or image
                    alt={benefit.title}
                    width={64} // Adjust size as needed
                    height={64} // Adjust size as needed
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm text-black mb-4">{benefit.description}</p>
                <Button className="mt-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="mb-8 text-xl font-medium">
            "Automating our social media engagement has transformed our customer interactions, making our conversations feel personal and authentic."
          </blockquote>
          <p className="text-muted-foreground">@satisfied_user</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Experience Seamless Engagement Today
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of businesses transforming their customer engagement with AI automation.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Get Started</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white min-h-[390px]">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between h-full">
          {/* Subscribe Area */}
          <div className="mb-6 md:mb-0 md:w-1/2 flex flex-col">
            <h1 className="text-2xl font-bold">Logo</h1>
            <p className="mt-2 text-lg"> {/* Increased font size */}
              Subscribe to our newsletter for the latest features and updates.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email here"
                className="border rounded-l-md p-2 w-full md:w-80" // Increased width
              />
              <button className="bg-black text-white rounded-r-md p-2">Join</button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you consent to our Privacy Policy and receiving updates.
            </p>
          </div>

          {/* Links Area */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:w-1/2 md:ml-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>Support Center</li>
                <li>Blog Posts</li>
                <li>Case Studies</li>
                <li>Webinars</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company Info</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Press Room</li>
                <li>Investors</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Connect With Us</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          <p>© 2024 Automaton. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:underline">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Build Custom Smart Responses That Resonate with Your Audience",
    description:
      "Create personalized automated responses that maintain your brand voice and engage customers effectively.",
  },
  {
    title: "Effectively Handle Workload to Maximize Customer Engagement and ROI",
    description:
      "Optimize your workflow with AI-powered automation that scales with your business needs.",
  },
  {
    title: "Transform Every Comment into a Strategic Opportunity with Intelligence",
    description:
      "Convert interactions into meaningful connections using smart response technology.",
  },
]

const benefits = [
  {
    title: "Seamless Automation for Every Interaction",
    description: "Automate responses while maintaining personal touch",
  },
  {
    title: "Maximize Engagement and Turn Followers into Customers",
    description: "Convert engagement into business growth",
  },
  {
    title: "Streamline Your Instagram Strategy",
    description: "Optimize your social media workflow",
  },
  {
    title: "Marketing Made Effortless",
    description: "Simplify your marketing operations",
  },
]