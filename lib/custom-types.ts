import type { ImageData } from "@/lib/image-data"

export interface LoginLeftPanelProps {
  currentImage: ImageData
}

export interface LoginRightPanelProps {
  currentImage: ImageData
  onNext: () => void
  onPrev: () => void
}