import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="mx-auto w-full max-w-[900px] overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Illustration */}
          <div className="relative hidden items-center justify-center bg-white p-8 md:flex">
            <div className="absolute right-6 top-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 font-semibold text-yellow-600">
                AZ
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20210553-XccBRHf94iKjiqwen2uvhZ7nDUTJPb.png"
                alt="Login illustration"
                className="mx-auto mb-4 max-w-[320px]"
              />
              <h3 className="text-xl font-semibold">TaskBoard Pro </h3>
              <p className="mt-2 text-sm text-gray-500">Organize your tasks with ease</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Create an account</h2>
              <p className="mt-2 text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-yellow-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>

              <Button className="w-full bg-yellow-400 hover:bg-yellow-500">Create account</Button>

              <p className="text-center text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="#" className="text-yellow-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-yellow-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Card>
    </div>
  )
}

