import { Link, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Cart = () => {

    const itemCount = 1;
    const fee = 1;

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart aria-hidden='true' className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6 items-center">
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                    <div className="flex w-full flex-col pr-6 pb-5 m-4 border-b border-gray-200">
                        {/* {TODO: cart logic} */}
                        Cart items
                    </div>
                    <div className="space-y-4 pr-6 p-4">
                        <Separator />
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Total</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants({className: 'w-full'})}>
                                    Continue to checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                    </>
                ) : (<div></div>)}
            </SheetContent>
        </Sheet>
    );
}

export default Cart;