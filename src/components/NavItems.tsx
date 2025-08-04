"use client";

import { PRODUCT_CATAGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
    const [activeIndex, setActiceIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    return (
        <div className="flex gap-4 h-full">
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