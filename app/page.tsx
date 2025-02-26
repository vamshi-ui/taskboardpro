// import Image from "next/image";

import { Button } from "@/components/ui/button";
import {  ListTodo, Users, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const isSignedIn = false;
  return (
    <div className="w-100">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Organize your tasks with{" "}
                  <span className="text-yellow-600">simplicity</span>
                </h1>
                <p className="mt-6 text-lg text-gray-500">
                  TaskBoard Pro helps teams and individuals manage tasks, track
                  progress, and achieve goals with an intuitive and powerful
                  task management system.
                </p>
                <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                  {isSignedIn ? (
                    <Link href="/pages/dashboard">
                      <Button
                        size="lg"
                        className="bg-yellow-400 hover:bg-yellow-500"
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/signup">
                      <Button
                        size="lg"
                        className="bg-yellow-400 hover:bg-yellow-500"
                      >
                        Get Started - It's Free
                      </Button>
                    </Link>
                  )}
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:col-span-6 lg:mt-0">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20210553-XccBRHf94iKjiqwen2uvhZ7nDUTJPb.png"
                    alt="App screenshot"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to stay organized
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                Powerful features to help you manage tasks, collaborate with
                your team, and track progress effectively.
              </p>
            </div>

            <div className="mt-20">
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Task Management",
                    description:
                      "Create, organize, and track tasks with ease. Set priorities, deadlines, and track progress in real-time.",
                    icon: ListTodo,
                  },
                  {
                    title: "Team Collaboration",
                    description:
                      "Work together seamlessly with your team. Assign tasks, share updates, and stay in sync.",
                    icon: Users,
                  },
                  {
                    title: "Dashboard Overview",
                    description:
                      "Get a clear view of your progress with intuitive dashboards and visual reports.",
                    icon: LayoutDashboard,
                  },
                ].map((feature) => (
                  <div key={feature.title} className="relative">
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                        <feature.icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Loved by productive teams
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                See what our users have to say about how TaskBoard Pro has
                transformed their workflow.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  quote:
                    "TaskBoard Pro has completely transformed how our team manages tasks. The interface is intuitive and the features are exactly what we needed.",
                  name: "Sarah Johnson",
                  role: "Product Manager",
                },
                {
                  quote:
                    "The best task management tool we've used. It's simple yet powerful, and the team collaboration features are outstanding.",
                  name: "Michael Chen",
                  role: "Tech Lead",
                },
                {
                  quote:
                    "Finally, a task management tool that actually helps us stay organized without getting in the way. Highly recommended!",
                  name: "Emily Rodriguez",
                  role: "Marketing Director",
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <blockquote className="text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4 border-t pt-4">
                    <div className="h-10 w-10 rounded-full bg-yellow-100" />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                Join thousands of teams already using TaskBoard Pro to boost their
                productivity.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                {isSignedIn ? (
                  <Link href="/pages/dashboard">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500"
                    >
                      Start for Free
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
