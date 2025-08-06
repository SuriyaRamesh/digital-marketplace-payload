import { ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";

const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger className="group">
                <ShoppingCart className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            </SheetTrigger>
        </Sheet>
    );
}

export default Cart;