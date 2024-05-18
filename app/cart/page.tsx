import { getUserCart } from "@/actions/user.actions";
import CartTotal from "@/components/cart/CartTotal";
import { getServerSession } from "next-auth";
import CartCard from "@/components/shared/cards/CartCard";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const coursesInCart = await getUserCart();

  // get the logged in user
  const session = await getServerSession(authOptions);

  // get the total number of items in the cart
  const itemsInCart = coursesInCart.cart?.cartProducts.length;

  const cartItemMessage =
    itemsInCart === 0
      ? "Your cart is empty"
      : itemsInCart === 1
      ? `1 item in cart`
      : `${itemsInCart} Items in Cart`;

  return (
    <div>
      <h3 className="h3-bold-extra">Shopping Cart</h3>
      <p className="text-semibold mt-9">{cartItemMessage}</p>
      <Separator className="my-4 bg-[#D1D7DC]" />
      <div className="flex flex-wrap items-start justify-between gap-10">
        <div>
          {coursesInCart.cart?.cartProducts.map((product: any) => (
            <CartCard
              key={`${product.cartId}-${product.courseId}`}
              product={product.course}
            />
          ))}
        </div>
        <CartTotal courses={coursesInCart} user={session?.user} />
      </div>
    </div>
  );
};

export default page;
