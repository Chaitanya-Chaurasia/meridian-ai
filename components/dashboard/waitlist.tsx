"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState<string>("");

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });
        
        if (!error && count !== null) {
          setWaitlistCount(count.toString());
        }
      } catch (err) {
        console.error('Error fetching waitlist count:', err);
      }
    };

    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) {
        if (error.code === '23505') { 
          toast.success("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success("Successfully joined the waitlist!");
        setEmail("");
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error adding to waitlist:", err);
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-transparent">
        <div className="">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size={2}
              className="text-xs placeholder:text-xs bg-white text-black"
            />
            <Button
              type="submit"
              className="bg-black text-xs hover:bg-gray-800 text-white flex items-center justify-center gap-2"
              disabled={isSubmitted}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="h-4 w-4" />
                  You&apos;re on the list!
                </>
              ) : (
                <>
                  Join Waitlist!
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {error && (
            <p className="text-xs text-red-500 mt-2">{error}</p>
          )}
          <div className="flex items-center gap-4 mt-4">
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
              <p className="text-xs sm:text-white md:text-gray-600">
                & <span className="font-medium">{waitlistCount.toLocaleString()}+ people</span>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
