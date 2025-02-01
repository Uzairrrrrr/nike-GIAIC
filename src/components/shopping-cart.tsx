"use client";

import { useCart } from "@/lib/cart-context";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const router = useRouter(); // ✅ Hook is now inside the component function
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleCheckout = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("items", JSON.stringify(state.items));
    searchParams.set("total", state.total.toString());
    router.push(`/checkout`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold mb-8">Bag</h1>

      <div className="grid md:grid-cols-[1fr,400px] gap-12">
        <div>
          {state.items.length === 0 ? (
            <p className="text-gray-500">Your bag is empty.</p>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-6 pb-6 border-b">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={100}
                      width={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="font-medium">RS {item.price.toLocaleString()}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Size UK {item.size}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-full"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-full"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-500 hover:text-black"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 hover:text-black">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="font-bold mb-4">Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>RS {state.total.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold mb-6">
              <p>Total</p>
              <p>RS {state.total.toLocaleString()}</p>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-black text-white hover:bg-gray-900"
            >
              Member Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
