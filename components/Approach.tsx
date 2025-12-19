import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-16">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-12 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="I start by understanding project goals, audience, and structure. 
          This helps me outline the roadmap clearly before jumping into development."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
          />
        </Card>

        <Card
          title="Development & Updates"
          icon={<AceternityIcon order="Phase 2" />}
          des="I code step by step, testing features as I go, and provide regular updates 
          to make sure the project is aligned with expectations."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-2xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Final Touch & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="After refining the design and fixing bugs, I deploy the project 
          and make sure it works smoothly across devices."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-2xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-xs w-full mx-auto p-3 relative lg:h-[22rem] rounded-2xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-8 w-8 -top-2 -left-2 dark:text-white text-black opacity-20" />
      <Icon className="absolute h-8 w-8 -bottom-2 -left-2 dark:text-white text-black opacity-20" />
      <Icon className="absolute h-8 w-8 -top-2 -right-2 dark:text-white text-black opacity-20" />
      <Icon className="absolute h-8 w-8 -bottom-2 -right-2 dark:text-white text-black opacity-20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 px-6">
        <div className="text-center group-hover/canvas-card:-translate-y-3 absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 flex items-center justify-center">
          {icon}
        </div>

        <h2
          className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-3 font-semibold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        <p
          className="text-xs opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-2 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
       bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full items-center 
      justify-center rounded-full bg-slate-950 px-4 py-1 text-purple backdrop-blur-3xl font-bold text-lg"
      >
        {order}
      </span>
    </button>
  );
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
