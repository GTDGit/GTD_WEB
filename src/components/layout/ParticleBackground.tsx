"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 100;
        const connectionDistance = 150;
        const mouseDistance = 200;

        const mouse = { x: 0, y: 0 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            baseVx: number;
            baseVy: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseVx = (Math.random() - 0.5) * 0.5; // Slower base speed
                this.baseVy = (Math.random() - 0.5) * 0.5;
                this.vx = this.baseVx;
                this.vy = this.baseVy;
                this.size = Math.random() * 2 + 1;
                const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#e0f2fe"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Friction factor - pulls velocity back to base velocity
                const friction = 0.02;
                this.vx += (this.baseVx - this.vx) * friction;
                this.vy += (this.baseVy - this.vy) * friction;

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.05; // Gentle push
                    const directionY = forceDirectionY * force * 0.05;
                    this.vx += directionX;
                    this.vy += directionY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((a, i) => {
                for (let j = i; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-bg">
            {/* 1 color gradient in center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-dark-bg to-dark-bg" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
        </div>
    );
}
