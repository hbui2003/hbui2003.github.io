import React, { useEffect, useRef } from "react";
// import { TiArrowRightOutline } from "react-icons/fa";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      particles = [];
      const numberOfParticles = 80;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20 flex items-center relative overflow-hidden"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* 3D Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/30"
          style={{ transform: "rotate(45deg)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-blue-400/30 rounded-full"
        />
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center md:w-1/2"
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-300"
          >
            Hello World! I'm
          </motion.h1>

          {/* Name with 3D effect */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mt-2 relative"
            style={{
              textShadow: "0 0 40px rgba(34, 211, 238, 0.5)",
            }}
          >
            Huy Bui
          </motion.h2>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4"
          >
            <span className="mr-2">I&apos;m a</span>
            <ReactTyped
              strings={[
                "Software Developer",
                "Automation Engineer",
                "Data Engineer",
                "Web Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-lg mt-4 leading-relaxed"
          >
            I am <span className="text-cyan-400 font-semibold">Huy Bui</span>, a
            dedicated and ambitious{" "}
            <span className="text-blue-400 font-semibold">
              Computer Science student
            </span>
            . With a strong foundation in programming, mathematics, and software
            engineering, I&apos;m passionate about solving complex problems and
            delivering efficient, innovative solutions.
          </motion.p>

          {/* Projects Button with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6"
          >
            <Link
              to="About"
              smooth
              duration={500}
              offset={-80}
              className="group text-white px-6 py-3 flex items-center w-fit rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10">About Me</span>
              <span className="group-hover:rotate-90 duration-300 ml-1 relative z-10">
                {/* <TiArrowRightOutline size={22} /> */}
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Animated Avatar/Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="hidden md:block md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative w-96 h-96 mx-auto">
            {/* Floating code symbols */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 text-cyan-400 text-4xl font-bold opacity-40"
            >
              {"{ }"}
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-20 right-10 text-blue-400 text-5xl font-bold opacity-40"
            >
              {"</>"}
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-5 text-purple-400 text-3xl font-bold opacity-40"
            >
              {"[ ]"}
            </motion.div>

            {/* Main Avatar Circle */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-80 h-80 border-4 border-cyan-500/20 rounded-full"
                  style={{ borderStyle: "dashed" }}
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-80 h-80 border-4 border-blue-500/20 rounded-full scale-110"
                  style={{ borderStyle: "dotted" }}
                />

                {/* Center avatar - Developer working */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full border-4 border-cyan-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  {/* Laptop/Computer illustration */}
                  <div className="relative">
                    {/* Monitor */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(34, 211, 238, 0.3)",
                          "0 0 40px rgba(34, 211, 238, 0.5)",
                          "0 0 20px rgba(34, 211, 238, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-40 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-4 border-cyan-400/50 relative overflow-hidden"
                    >
                      {/* Screen content - code lines */}
                      <div className="p-2 space-y-1">
                        <motion.div
                          animate={{ width: ["0%", "80%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 bg-cyan-400/60 rounded"
                        />
                        <motion.div
                          animate={{ width: ["0%", "60%"] }}
                          transition={{
                            duration: 2,
                            delay: 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 bg-blue-400/60 rounded"
                        />
                        <motion.div
                          animate={{ width: ["0%", "90%"] }}
                          transition={{
                            duration: 2,
                            delay: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 bg-purple-400/60 rounded"
                        />
                        <motion.div
                          animate={{ width: ["0%", "70%"] }}
                          transition={{
                            duration: 2,
                            delay: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 bg-cyan-400/60 rounded"
                        />
                      </div>

                      {/* Cursor blink */}
                      <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-3 right-3 w-1 h-3 bg-cyan-400"
                      />
                    </motion.div>

                    {/* Keyboard base */}
                    <div className="w-44 h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg mx-auto -mt-1 border-2 border-cyan-400/30" />
                  </div>

                  {/* Floating tech icons around */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-12 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm border border-cyan-400/30"
                  >
                    JS
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      x: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-12 left-12 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm border border-blue-400/30"
                  >
                    Java
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-16 left-8 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 font-bold text-sm border border-purple-400/30"
                  >
                    {"<>"}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;
