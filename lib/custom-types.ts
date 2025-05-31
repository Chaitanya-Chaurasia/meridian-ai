import type { ImageData } from "@/lib/image-data"

export interface LoginLeftPanelProps {
  currentImage: ImageData
  onSwitchToRegister: () => void
}

export interface LoginRightPanelProps {
  currentImage: ImageData
  onNext: () => void
  onPrev: () => void
  onSwitchToLogin: () => void
  viewMode: "login" | "register"
}