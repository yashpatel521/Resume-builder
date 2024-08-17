import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-full mx-auto bg-white text-black rounded-lg shadow-lg">
      <header className="bg-white text-black p-6 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 border">
              <AvatarImage src="https://placehold.co/600x400" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-sm text-black/80">Software Engineer</p>
            </div>
          </div>
          <div className="grid gap-1 text-right">
            <p>johndoe@email.com</p>
            <p>+1 (555) 555-5555</p>
            <p>linkedin.com/in/johndoe</p>
          </div>
        </div>
      </header>
      <main className="p-8 grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="grid gap-8 bg-white text-black p-6 rounded-lg">
            <div>
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-sm text-black/60">
                Acme Inc. | 2020 - Present
              </p>
              <p className="text-sm">
                Developed and maintained web applications using React, Node.js,
                and MongoDB. Collaborated with cross-functional teams to deliver
                high-quality software solutions. Implemented new features and
                optimized existing systems to improve performance and user
                experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Intern</h3>
              <p className="text-sm text-black/60">Widgets Co. | 2019 - 2020</p>
              <p className="text-sm">
                Assisted in the development of a SaaS platform using Vue.js and
                Ruby on Rails. Gained experience in agile software development
                practices, including sprint planning, code reviews, and
                deployment. Contributed to the improvement of the platform's
                user interface and overall functionality.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="grid gap-6 bg-white text-black p-6 rounded-lg">
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-black/60">
                University of Example, 2016 - 2020
              </p>
              <p className="text-sm">
                Graduated with a 3.8 GPA, Dean's List, and Cum Laude honors.
                Participated in various hackathons and coding competitions,
                winning several awards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">High School Diploma</h3>
              <p className="text-sm text-black/60">
                Example High School, 2012 - 2016
              </p>
              <p className="text-sm">
                Maintained a 4.0 GPA and was the valedictorian of my graduating
                class. Actively involved in student council, robotics club, and
                various community service initiatives.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid gap-8 bg-white text-black p-6 rounded-lg">
            <div className="grid grid-cols-[1fr_2fr] gap-6">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Personal Website"
                className="rounded-md object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Personal Website
                  </Link>
                </h3>
                <p className="text-sm text-black/60">2022</p>
                <p className="text-sm">
                  Designed and developed a personal website using React,
                  Next.js, and Tailwind CSS. Implemented features like a blog,
                  portfolio, and contact form. The website showcases my work,
                  skills, and achievements, and serves as an online presence for
                  potential employers and clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] gap-6">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Expense Tracker App"
                className="rounded-md object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Expense Tracker App
                  </Link>
                </h3>
                <p className="text-sm text-black/60">2021</p>
                <p className="text-sm">
                  Built a full-stack expense tracking application using React,
                  Node.js, and MongoDB. Included features like user
                  authentication, category management, and data visualization.
                  The app helps users effectively manage their personal finances
                  and track their spending habits.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] gap-6">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="E-commerce Platform"
                className="rounded-md object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    E-commerce Platform
                  </Link>
                </h3>
                <p className="text-sm text-black/60">2020</p>
                <p className="text-sm">
                  Developed a scalable e-commerce platform using React, Redux,
                  and Stripe for payment processing. Implemented features like
                  product management, shopping cart, and order fulfillment. The
                  platform provides a seamless shopping experience for customers
                  and robust administrative tools for the business owners.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid gap-8 bg-white text-black p-6 rounded-lg">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Technical Skills</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>React</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-black/60">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Node.js</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-black/60">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>MongoDB</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <span className="text-black/60">Proficient</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Git</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-black/60">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <span className="text-black/60">Advanced</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Soft Skills</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>Communication</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <span className="text-black/60">Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Teamwork</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-black/60">Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Problem-Solving</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <span className="text-black/60">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Adaptability</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-black/60">Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Time Management</span>
                  <div className="w-1/2 bg-white rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <span className="text-black/60">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
