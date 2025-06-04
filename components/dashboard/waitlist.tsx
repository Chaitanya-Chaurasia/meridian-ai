"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { fonts } from "@/lib/utils";

export function Waitlist() {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() == console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Image src={logo} alt="logo" className="w-24 h-24" />
            <h2 className="text-4xl font-semibold tracking-tighter leading-tighter">
              Join our{" "}
              <span className={`text-lime-500 ${fonts.playfairDisplay}`}>
                waitlist
              </span>
              <p className="text-2xl font-medium tracking-tighter">
                You type, we book- as simple as that!
              </p>
            </h2>
          </div>

          <div>
            <Card className="shadow-none border-0">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-sm font-medium">
                  Keep an eye out on your inbox!
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    size={2}
                    className=""
                  />
                  <Button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="h-4 w-4" />
                        You're on the list!
                      </>
                    ) : (
                      <>
                        Join the waitlist
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {avatars.map((avatar) => (
                      <Avatar
                        key={avatar.profileUrl}
                        className="border-2 border-white h-6 w-6 object-cover"
                      >
                        <AvatarImage src={avatar.imageUrl} alt="Person 1" />
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm text-gray-600">
                      You're not alone.{" "}
                      <span className="font-medium">1,500+ people</span> joined!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
