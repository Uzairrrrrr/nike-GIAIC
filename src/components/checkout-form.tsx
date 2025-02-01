"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
interface CheckoutFormData {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2: string
  addressLine3: string
  postalCode: string
  locality: string
  state: string
  email: string
  phone: string
  saveAddress: boolean
  makePreferred: boolean
}

export function CheckoutForm() {
  const { state } = useCart()
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
    locality: "",
    state: "",
    email: "",
    phone: "",
    saveAddress: false,
    makePreferred: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  
    toast.success("Your order has been placed successfully! For now, you can pay cash on delivery" , {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid md:grid-cols-[1fr,400px] gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">How would you like to get your order?</h2>
            <div className="border rounded-lg p-4 flex items-center gap-4">
              <Image src="/Express-logo.png"
               width={50}
               height={50}
               alt="Express" />
              <div>
                <p className="font-medium">Express</p>
                <p className="font-medium">Express Delivery</p>
                <p className="text-sm text-gray-600">2-3 business days</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Enter your name and address:</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
              <Input
                placeholder="Address Line 1"
                value={formData.addressLine1}
                onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                required
              />
              <Input
                placeholder="Address Line 2"
                value={formData.addressLine2}
                onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
              />
              <Input
                placeholder="Address Line 3"
                value={formData.addressLine3}
                onChange={(e) => setFormData({ ...formData, addressLine3: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  required
                />
                <Input
                  placeholder="Locality"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  required
                />
              </div>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="State/Territory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  {/* Add more states */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">What's your contact information?</h2>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="saveAddress"
                checked={formData.saveAddress}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, saveAddress: checked as boolean })
                }
              />
              <label htmlFor="saveAddress" className="text-sm">
                Save this address to my profile
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="makePreferred"
                checked={formData.makePreferred}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, makePreferred: checked as boolean })
                }
              />
              <label htmlFor="makePreferred" className="text-sm">
                Make this my preferred address
              </label>
            </div>
          </div>
          <ToastContainer />
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
            Continue to Payment
          </Button>
        </form>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Size UK {item.size}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="font-medium">₹ {item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>RS 2000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
