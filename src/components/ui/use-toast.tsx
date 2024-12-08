"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface Toast {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

interface ToastContextType {
  toast: (toast: Toast) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (newToast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, 3000) // Remove toast after 3 seconds
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-4">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className={`p-4 rounded-md ${
              toast.variant === "destructive" ? "bg-red-600 text-white" : "bg-gray-800 text-white"
            }`}
          >
            <strong>{toast.title}</strong>
            {toast.description && <p>{toast.description}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
