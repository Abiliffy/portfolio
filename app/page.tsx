"use client"

import { useState } from "react"
import { Heart, Star, Cloud, Moon, Music, Sparkles, Github, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarAnimation } from "@/components/star-animation"

// Custom 𝕏 icon component
function XIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  )
}

export default function HomePage() {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number; opacity: number; rotation: number; color: string }[]
  >([])

  const createStar = (e: React.MouseEvent) => {
    const x = e.clientX
    const y = e.clientY
    const newStar = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 10 + 5,
      opacity: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
      color: Math.random() > 0.5 ? "gold" : "white",
    }
    setStars((prev) => [...prev, newStar])
    setTimeout(() => {
      setStars((prev) => prev.filter((star) => star.id !== newStar.id))
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      {/* Star animations */}
      <StarAnimation stars={stars} />

      {/* Floating elements */}
      <div className="fixed w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-[10%] sm:left-1/4 animate-float-slow opacity-30">
          <Heart className="h-12 w-12 text-gray-800" />
        </div>
        <div className="absolute top-1/3 right-[10%] sm:right-1/4 animate-float opacity-30">
          <Star className="h-10 w-10 text-gray-600" />
        </div>
        <div className="absolute bottom-1/4 left-[15%] sm:left-1/3 animate-float-slow opacity-30">
          <Cloud className="h-14 w-14 text-gray-700" />
        </div>
        <div className="absolute top-2/3 right-[15%] sm:right-1/3 animate-float opacity-30">
          <Moon className="h-8 w-8 text-gray-600" />
        </div>
        <div className="absolute bottom-1/3 right-[5%] sm:right-1/5 animate-float-slow opacity-30">
          <Sparkles className="h-10 w-10 text-gray-700" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 sm:py-8 px-4 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-gray-800 to-black shadow-monochrome-dark mb-4 border-4 border-gray-200">
          <img
            src="/images/profile.jpg"
            width={128}
            height={128}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center tracking-wide text-shadow-monochrome-dark">
          ✧ My profile ✧
        </h1>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center mb-8">
        <div className="bg-gray-200/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-monochrome-dark-sm flex gap-4">
          <a href="#top">
            <NavButton icon={<Heart className="h-4 w-4" />} label="Home" createStar={createStar} />
          </a>
          <a href="#gallery">
            <NavButton icon={<Star className="h-4 w-4" />} label="Gallery" createStar={createStar} />
          </a>
          <a href="#music">
            <NavButton icon={<Music className="h-4 w-4" />} label="Music" createStar={createStar} />
          </a>
          <a href="https://github.com/LiThIuMss" target="_blank">
            <NavButton icon={<Github className="h-4 w-4" />} label="GitHub" createStar={createStar} />
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex-1 px-4 pb-12 max-w-5xl mx-auto w-full">
        <section id="top" className="mb-8 md:mb-12">
          <Card className="border-0 bg-gray-200/80 backdrop-blur-sm shadow-monochrome-dark-sm">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center text-shadow-monochrome-dark-sm">
                <Sparkles className="h-5 w-5 mr-2" /> About Me
              </h2>
              <div className="space-y-4 text-gray-800">
                <p>backend 🍤</p>
                <div className="pt-4 border-t border-gray-400">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 text-shadow-monochrome-dark-sm">
                    Find me online ✧
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SocialLink
                      icon={<Github className="h-5 w-5" />}
                      title="GitHub"
                      username="@Abiliffy"
                      url="https://github.com/Abiliffy"
                      createStar={createStar}
                    />
                    <SocialLink
                      icon={<XIcon className="h-5 w-5" />}
                      title="𝕏"
                      username=""
                      url=""
                      createStar={createStar}
                    />
                    <SocialLink
                      icon={<Globe className="h-5 w-5" />}
                      title="Qiita"
                      username="@LiThIuMss"
                      url="https://qiita.com/LiThIuMs"
                      createStar={createStar}
                    />
                    <SocialLink
                      icon={<Globe className="h-5 w-5" />}
                      title="compass"
                      username="@zo____n"
                      url="https://connpass.com/user/zo____n/"
                      createStar={createStar}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gallery section */}
        <section id="gallery" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center text-shadow-monochrome-dark-sm">
            <Star className="h-5 w-5 mr-2" /> My Gallery
          </h2>

          {/* 上3枚 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg"].map((src, index) => (
              <Card
                key={index}
                className="border-0 overflow-hidden bg-transparent backdrop-blur-sm hover:shadow-monochrome-dark-sm transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <img
                    src={src}
                    width={300}
                    height={200}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900">🍤</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 下2枚（中央寄せ） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-3xl mx-auto">
            {["/images/gallery4.jpg", "/images/gallery6.jpg"].map((src, index) => (
              <Card
                key={index + 3}
                className="border-0 overflow-hidden bg-transparent backdrop-blur-sm hover:shadow-monochrome-dark-sm transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <img
                    src={src}
                    width={300}
                    height={200}
                    alt={`Gallery image ${index + 4}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900">🍤</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-6 text-center text-gray-700">
        <div className="flex justify-center space-x-4 mb-4">
          <SocialButton icon={<Heart />} createStar={createStar} />
          <SocialButton icon={<Star />} createStar={createStar} />
          <a href="https://github.com/LiThIuMss" target="_blank" rel="noopener noreferrer">
            <SocialButton icon={<Github />} createStar={createStar} />
          </a>
          <a href="https://x.com/_1udn_1udn" target="_blank" rel="noopener noreferrer">
            <SocialButton icon={<XIcon />} createStar={createStar} />
          </a>
        </div>
        <p className="text-sm opacity-70">✧ Created with v0.dev ✧</p>
        <p className="text-xs opacity-50 mt-1">© {new Date().getFullYear()} LiThIuMss HomePage</p>
        <p className="text-[10px] text-gray-400 mt-2">
          <a target="_blank" href="https://icons8.com/icon/FpHjkMD6ucqh/shooting-stars" className="underline hover:text-gray-500">
            流れ星
          </a>{" "}
          アイコン by{" "}
          <a target="_blank" href="https://icons8.com" className="underline hover:text-gray-500">
            Icons8
          </a>
        </p>
      </footer>
    </div>
  )
}

function NavButton({ icon, label, createStar }: { icon: React.ReactNode; label: string; createStar: (e: React.MouseEvent) => void }) {
  return (
    <Button
      variant="ghost"
      className="rounded-full text-gray-700 hover:bg-gray-300/70 hover:text-gray-900 p-2 sm:px-4 sm:py-2 transition-all duration-200"
      onClick={createStar}
    >
      <span className="flex items-center">
        {icon}
        <span className="hidden sm:inline ml-1.5">{label}</span>
      </span>
    </Button>
  )
}

function SocialButton({ icon, createStar }: { icon: React.ReactNode; createStar: (e: React.MouseEvent) => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-gray-200/80 backdrop-blur-sm hover:bg-gray-300/80 text-gray-700 hover:text-gray-900"
      onClick={createStar}
    >
      {icon}
    </Button>
  )
}

function SocialLink({
  icon,
  title,
  username,
  url,
  createStar,
}: {
  icon: React.ReactNode
  title: string
  username: string
  url: string
  createStar: (e: React.MouseEvent) => void
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-lg bg-gray-300/50 hover:bg-gray-400/50 transition-colors duration-300"
      onClick={createStar}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center mr-3 text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-gray-900 font-medium">{title}</div>
        <div className="text-gray-700 text-sm">{username}</div>
      </div>
    </a>
  )
}