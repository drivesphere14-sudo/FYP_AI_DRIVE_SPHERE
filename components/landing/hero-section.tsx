import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background car image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-car.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <h1 className="text-balance">
          <span className="block font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Optimal mobility
          </span>
          <span className="block mt-2">
            <span className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              meets{" "}
            </span>
            <span className="font-serif text-5xl font-bold italic text-accent md:text-7xl lg:text-8xl">
              exquisite design
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
          Elevating the standard of vehicle rentals through architectural
          precision and seamless IoT technology.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl rounded-[2rem] border border-border/60 bg-card/90 p-8 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 rounded-[1.75rem] bg-background/90 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.25)] sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  One account, one experience
                </p>
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  Sign in and start your journey.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                  Access the showroom, manage bookings, and view your dashboard from a single login.
                </p>
              </div>

              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Login
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
