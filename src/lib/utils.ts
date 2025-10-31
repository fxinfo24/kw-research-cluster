import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  
  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`
  }
  return `${remainingSeconds}s`
}

export function formatStatus(status: string): {
  label: string
  variant: "success" | "error" | "warning" | "default"
} {
  switch (status.toLowerCase()) {
    case "success":
    case "completed":
      return { label: "Success", variant: "success" }
    case "error":
    case "failed":
      return { label: "Failed", variant: "error" }
    case "running":
    case "executing":
      return { label: "Running", variant: "warning" }
    case "waiting":
    case "queued":
      return { label: "Waiting", variant: "default" }
    default:
      return { label: status, variant: "default" }
  }
}