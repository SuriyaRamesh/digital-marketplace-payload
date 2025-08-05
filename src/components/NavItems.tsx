"use client";

import { PRODUCT_CATAGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    const [activeIndex, setActiceIndex] = useState<null | number>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(e.key === "Escape") {
                setActiceIndex(null);
            }
        }

        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener('keydown', handler);
        }
    }, []);

    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(navRef, () => setActiceIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATAGORIES.map((category, i) => {
                
                const handleOpen = () => {
                    if(activeIndex === i) {
                        setActiceIndex(null);
                    }
                    else {
                        setActiceIndex(i);
                    }
                }

                const isOpen = i === activeIndex;

                return (
                    <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} key={category.value} />
                )
            })}
        </div>
    )
}

export default NavItems;