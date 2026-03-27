"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import type { ReactNode } from "react";

interface AnimateInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateIn({ children, delay = 0, className, as = "div" }: AnimateInProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <MotionTag
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

