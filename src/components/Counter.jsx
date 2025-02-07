import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import counterBg from "../img/pattern-bg-3.jpg";

const Counter = () => {
  const [count, setCount] = useState({
    projects: 0,
    jobs: 0,
    customers: 0,
    years: 0,
  });

  const [isCounting, setIsCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true);
      animateCounter();
    }
  }, [inView, isCounting]);

  const animateCounter = () => {
    const speed = 50;
    const projectTarget = 50;
    const jobTarget = 23;
    const customerTarget = 30;
    const yearTarget = 7;

    const countProjects = setInterval(() => {
      setCount((prev) => {
        if (prev.projects < projectTarget) {
          return { ...prev, projects: prev.projects + 1 };
        } else {
          clearInterval(countProjects);
          return prev;
        }
      });
    }, speed);

    const countJobs = setInterval(() => {
      setCount((prev) => {
        if (prev.jobs < jobTarget) {
          return { ...prev, jobs: prev.jobs + 1 };
        } else {
          clearInterval(countJobs);
          return prev;
        }
      });
    }, speed);

    const countCustomers = setInterval(() => {
      setCount((prev) => {
        if (prev.customers < customerTarget) {
          return { ...prev, customers: prev.customers + 1 };
        } else {
          clearInterval(countCustomers);
          return prev;
        }
      });
    }, speed);

    const countYears = setInterval(() => {
      setCount((prev) => {
        if (prev.years < yearTarget) {
          return { ...prev, years: prev.years + 1 };
        } else {
          clearInterval(countYears);
          return prev;
        }
      });
    }, speed);
  };

  return (
    <section
      ref={ref}
      className="counter-section xl:py-20 lg:py-16 sm:py-14 py-10 bg-center bg-cover relative after:content-[''] after:absolute after:opacity-85 after:w-full after:h-full after:top-0 after:left-0 after:z-[-1] z-[1] after:bg-blue-l-950"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-4 gap-6 items-center">
          <div className="counter-box text-center flex flex-col gap-5 border-[3px] border-t-[8px] rounded-xl overflow-hidden px-4 py-6 border-solid border-blue-l-500 rounded-tl-none rounded-tr-none">
            <div className="icon text-h2">📊</div>
            <div className="space-y-2 text-center">
              <h2 className="count text-h4">{count.projects}+</h2>
              <p className="label">Finished Projects</p>
            </div>
          </div>
          <div className="counter-box text-center flex flex-col gap-5 border-[3px] border-t-[8px] rounded-xl overflow-hidden px-4 py-6 border-solid border-blue-l-500 rounded-tl-none rounded-tr-none">
            <div className="icon text-h2">💼</div>
            <div className="space-y-2 text-center">
              <h2 className="count text-h4">{count.jobs}+</h2>
              <p className="label">Created Jobs</p>
            </div>
          </div>
          <div className="counter-box text-center flex flex-col gap-5 border-[3px] border-t-[8px] rounded-xl overflow-hidden px-4 py-6 border-solid border-blue-l-500 rounded-tl-none rounded-tr-none">
            <div className="icon text-h2">😊</div>
            <div className="space-y-2 text-center">
              <h2 className="count text-h4">{count.customers}+</h2>
              <p className="label">Happy Customers</p>
            </div>
          </div>
          <div className="counter-box text-center flex flex-col gap-5 border-[3px] border-t-[8px] rounded-xl overflow-hidden px-4 py-6 border-solid border-blue-l-500 rounded-tl-none rounded-tr-none">
            <div className="icon text-h2">🕒</div>
            <div className="space-y-2 text-center">
              <h2 className="count text-h4">{count.years}+</h2>
              <p className="label">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
