"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Send,
  Smile,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Edit3,
  Check,
  X,
  Plane,
  MapPin,
  Calendar,
  Users,
  Settings,
} from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Message, ChatSession } from "@/lib/custom-types"


export function YourTripsUI() {
  const searchParams = useSearchParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Paris Weekend Trip",
      lastMessage: "Found 3 great hotels in Montmartre",
      timestamp: new Date(Date.now() - 86400000),
      messages: [],
    },
    {
      id: "2",
      title: "Tokyo Adventure Planning",
      lastMessage: "Best time to visit is during cherry blossom season",
      timestamp: new Date(Date.now() - 172800000),
      messages: [],
    },
    {
      id: "3",
      title: "Bali Honeymoon",
      lastMessage: "Recommended 5 romantic resorts",
      timestamp: new Date(Date.now() - 259200000),
      messages: [],
    },
  ])
  const [activeSession, setActiveSession] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editingContent, setEditingContent] = useState("")
  const [hasProcessedParams, setHasProcessedParams] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasProcessedParams) return

    const messageParam = searchParams.get("message")
    const fromParam = searchParams.get("from")
    const toParam = searchParams.get("to")

    if (messageParam) {
      const newSessionId = Date.now().toString()
      const userMessage: Message = {
        id: Date.now().toString(),
        content: messageParam,
        sender: "user",
        timestamp: new Date(),
      }

      const newSession: ChatSession = {
        id: newSessionId,
        title: messageParam.slice(0, 30) + "...",
        lastMessage: messageParam,
        timestamp: new Date(),
        messages: [userMessage],
      }

      setChatSessions((prev) => [newSession, ...prev])
      setActiveSession(newSessionId)
      setMessages([userMessage])
      setHasProcessedParams(true)

      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'd be happy to help you plan your trip! Let me gather some information and suggestions for you.",
          sender: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1500)
    } else if (fromParam && toParam) {
      const searchParamsData = {
        from: fromParam,
        to: toParam,
        mode: searchParams.get("mode") || "flight",
        tripType: searchParams.get("tripType") || "oneway",
        classType: searchParams.get("classType") || "economy",
        departDate: searchParams.get("departDate") || undefined,
        returnDate: searchParams.get("returnDate") || undefined,
      }

      const searchMessage: Message = {
        id: Date.now().toString(),
        content: `Search for ${searchParamsData.mode} from ${searchParamsData.from} to ${searchParamsData.to}`,
        sender: "user",
        timestamp: new Date(),
        type: "search-result",
        searchParams: searchParamsData,
      }

      const newSessionId = Date.now().toString()
      const newSession: ChatSession = {
        id: newSessionId,
        title: `${searchParamsData.from} to ${searchParamsData.to}`,
        lastMessage: "Search results",
        timestamp: new Date(),
        messages: [searchMessage],
      }

      setChatSessions((prev) => [newSession, ...prev])
      setActiveSession(newSessionId)
      setMessages([searchMessage])
      setHasProcessedParams(true)

      // Simulate search results
      setTimeout(() => {
        const searchResults: Message = {
          id: (Date.now() + 1).toString(),
          content: `Found several options for your ${searchParamsData.mode} from ${searchParamsData.from} to ${searchParamsData.to}. Here are the best deals I found...`,
          sender: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, searchResults])
      }, 1000)
    } else {
      setHasProcessedParams(true)
    }
  }, [searchParams, hasProcessedParams])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleSendMessage = useCallback(() => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    if (activeSession) {
      setChatSessions((prev) =>
        prev.map((session) =>
          session.id === activeSession
            ? {
                ...session,
                lastMessage: newMessage,
                timestamp: new Date(),
                messages: [...session.messages, userMessage],
              }
            : session,
        ),
      )
    }

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your request. Let me help you with that.",
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }, [newMessage, activeSession])

  const handleEditMessage = useCallback((messageId: string, content: string) => {
    setEditingMessageId(messageId)
    setEditingContent(content)
  }, [])

  const saveEdit = useCallback(
    (messageId: string) => {
      setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, content: editingContent } : msg)))
      setEditingMessageId(null)
      setEditingContent("")
    },
    [editingContent],
  )

  const cancelEdit = useCallback(() => {
    setEditingMessageId(null)
    setEditingContent("")
  }, [])

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
  }, [])

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }, [])

  const loadChatSession = useCallback(
    (sessionId: string) => {
      const session = chatSessions.find((s) => s.id === sessionId)
      if (session) {
        setActiveSession(sessionId)
        setMessages(session.messages)
      }
    },
    [chatSessions],
  )

  const renderSearchParams = useCallback((searchParams: any) => {
    return (
      <Card className="mb-4 border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Plane className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-900">Search Parameters</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600">From:</span>
              <span className="font-medium">{searchParams.from}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600">To:</span>
              <span className="font-medium">{searchParams.to}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600">Type:</span>
              <span className="font-medium capitalize">{searchParams.tripType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600">Class:</span>
              <span className="font-medium capitalize">{searchParams.classType}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }, [])

  const renderMessage = useCallback(
    (message: Message) => {
      const isEditing = editingMessageId === message.id

      return (
        <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start", )}>
          <div
            className={cn(
              "max-w-[80%] rounded-2xl px-4 py-3",
              message.sender === "user" ? "bg-black text-white" : "bg-gray-100 text-gray-900 border border-gray-200",
            )}
          >
            {message.type === "search-result" && message.searchParams && renderSearchParams(message.searchParams)}

            {isEditing ? (
              <div className="space-y-2">
                <Input
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  className="text-sm"
                  onKeyPress={(e) => e.key === "Enter" && saveEdit(message.id)}
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => saveEdit(message.id)} className="h-6 px-2">
                    <Check className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={cancelEdit} className="h-6 px-2">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            )}

            <div className="flex items-center justify-between mt-2">
              <p className="text-xs opacity-70">{formatTime(message.timestamp)}</p>

              <div className="flex items-center gap-1">
                {message.sender === "user" && !isEditing && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full"
                          onClick={() => handleEditMessage(message.id, message.content)}
                        >
                          <Edit3 className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Edit message</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {message.sender === "assistant" && (
                  <>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Helpful</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                            <ThumbsDown className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Not helpful</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                )}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full"
                        onClick={() => copyToClipboard(message.content)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Copy</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      )
    },
    [
      editingMessageId,
      editingContent,
      formatTime,
      handleEditMessage,
      saveEdit,
      cancelEdit,
      copyToClipboard,
      renderSearchParams,
    ],
  )

  return (
    <div className="h-screen mt-10 flex bg-gray-50">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-lg">Your Trips</h2>
          <p className="text-sm text-gray-500">Chat history and travel plans</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chatSessions.map((session) => (
            <div
              key={session.id}
              onClick={() => loadChatSession(session.id)}
              className={cn(
                "p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors",
                activeSession === session.id && "bg-blue-50 border-blue-200",
              )}
            >
              <h3 className="font-medium text-sm mb-1">{session.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{session.lastMessage}</p>
              <p className="text-xs text-gray-400">{session.timestamp.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Card className="rounded-none border-b border-t-0 border-x-0 shadow-none">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=AI" />
                  <AvatarFallback className="bg-black text-white">AI</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Travel Assistant</h3>
                  <p className="text-sm text-gray-500">Ready to help plan your perfect trip</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Avatar className="h-16 w-16 mx-auto mb-4">
                  <AvatarFallback className="bg-black text-white text-xl">AI</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-2">Start a conversation</h3>
                <p className="text-gray-500 text-sm">Ask me anything about travel planning!</p>
              </div>
            </div>
          ) : (
            messages.map(renderMessage)
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <Card className="rounded-none border-t border-b-0 border-x-0 shadow-none">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about destinations, flights, hotels..."
                  className="pr-10 border-gray-200 focus:border-black focus:ring-black"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-black hover:bg-gray-800 h-10 w-10 p-0 flex-shrink-0 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
