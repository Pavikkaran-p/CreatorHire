import React from 'react';
import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div className="">
      <main className="">
        <section className="w-full ml-20 px-[20%] justify-center pt-12">
          <div className="container px-4 md:px-6">
            <div className=" ">
              <div className="flex flex-col justify-center ">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Find Your Dream Job Today
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our hiring platform connects you with top-tier candidates, streamlines the interview process, and
                    provides comprehensive analytics to make informed hiring decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="mt-4  h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
                    to={'/loginuser'}   
                  >
                    Job seeker login
                  </Link>
                  
                  <Link
                    className="mt-4  h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
                    to={'/loginhr'}   
                  >
                    Recruter Login
                  </Link>
                  
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline your hiring process</h2>
                <p p className=" text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of tools to help you find, evaluate, and hire the best candidates for your
                  team.
                </p>
              </div>
            </div>
            <div className="ml-[20%]  max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Candidate Search</h3>
                      <p className="text-muted-foreground">
                        Easily search and filter through our database of top-tier candidates to find the perfect fit for
                        your team.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Interview Scheduling</h3>
                      <p className="text-muted-foreground">
                        Streamline the interview process with our seamless scheduling tools, ensuring a smooth
                        experience for both you and the candidate.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Comprehensive Analytics</h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights into your hiring process with our comprehensive analytics dashboard,
                        helping you make data-driven decisions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What our customers say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the companies and teams who have found success with our hiring platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-lg bg-background p-6">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full"
                  ></div>
                  <p className="text-muted-foreground">
                    "Hire Talent has been a game-changer for our hiring process. The platform's intuitive tools and
                    comprehensive analytics have helped us find and hire the best candidates for our team."
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-lg bg-background p-6">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JL</span>
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-none">Jane Lee</p>
                      <p className="text-sm text-muted-foreground">HR Manager, Globex Inc.</p>
                    </div>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full"
                  ></div>
                  <p className="text-muted-foreground">
                    "The platform's seamless interview scheduling and candidate search features have saved us countless
                    hours, making our hiring process more efficient than ever."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Job Search</div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Next Opportunity</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up to date with latest job listings and find the perfect role that matches your skills and
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="text" placeholder="Enter your email" 
                className="max-w-lg  rounded-2xl border shadow px-5 py-2" />
                <button type="submit"
                className='bg-black text-white rounded-2xl px-4 '
                >Submit</button>
              </form>
            </div>
          </div>
        </section>
      <footer className="py-12">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 CreatorHire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
