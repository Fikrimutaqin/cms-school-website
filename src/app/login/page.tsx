'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { GraduationCap, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    // Mock authentication
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className={cn(
      // Width and Heigth
      'flex min-h-screen flex-col items-center justify-center',
      // Padding and Background Color
      'px-4 py-12 bg-white',
      // Text Color
      'text-slate-900',
      // Position relative
      'relative',
    )}>
      {/* Background radial glow */}
      <div className={cn(
        // Width and Heigth
        'absolute inset-0',
        // Background Color
        'bg-[radial-gradient(circle_at_center,rgba(145,17,32,0.04),transparent_50%)]',
        // Pointer Events
        'pointer-events-none',
      )} />

      <div className={cn(
        // Width and Heigth
        'w-full max-w-md',
        // Space Y
        'space-y-8',
        // Position relative
        'relative',
        // Z index
        'z-10',
      )}>
        <div className={cn(
          // Flexbox
          'flex flex-col items-center justify-center',
          // Text Align
          'text-center',
        )}>
          <div className={cn(
            // Flexbox
            'flex h-12 w-12 items-center justify-center',
            // Background Color
            'rounded-xl bg-primary',
            // Text Color
            'text-white',
            // Shadow
            'shadow-lg shadow-primary/20',
          )}>
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className={cn(
            // Margin Top and Heigth
            'mt-6 text-3xl',
            // Font Bold
            'font-bold',
            // Tracking Tight
            'tracking-tight',
            // Text Color
            'text-slate-900',
          )}>
            EduCMS Portal
          </h2>
          <p className={cn(
            // Margin Top
            'mt-2',
            // Text Size
            'text-sm',
            // Text Color
            'text-slate-500',
          )}>
            Manage your school website, news, and sections.
          </p>
        </div>

        <Card className={cn(
          // Border
          'border-slate-200',
          // Background Color
          'bg-white',
          // Shadow
          'shadow-xl',
          // Padding
          'py-5',
        )}>
          <CardHeader className={cn(
            // Space Y
            'space-y-1',
          )}>
            <CardTitle className={cn(
              // Text Size and Font Bold
              'text-2xl font-bold',
              // Tracking Tight
              'tracking-tight',
              // Text Color
              'text-slate-900',
            )}>
              Sign In
            </CardTitle>
            <CardDescription className={cn(
              // Text Color
              'text-slate-500',
            )}>
              Enter your email and password to access your account.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pb-5">
              {error && (
                <div className={cn(
                  // Background Color
                  'bg-red-50',
                  // Border
                  'border border-red-200',
                  // Padding
                  'p-3',
                  // Text Size
                  'text-sm',
                  // Text Color
                  'text-red-600',
                )}>
                  {error}
                </div>
              )}
              <div className={cn(
                // Space Y
                'space-y-2',
              )}>
                <Label htmlFor="email" className={cn(
                  // Text Color
                  'text-slate-700',
                )}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    // Background Color
                    'bg-white',
                    // Input Style
                    'text-slate-900',
                    'py-5',
                    // Focus Style
                    'focus-visible:ring-red-200 focus-visible:ring-1',
                  )}
                  disabled={isLoading}
                />
              </div>
              <div className={cn(
                // Space Y
                'space-y-2',
              )}>
                <div className={cn(
                  // Flexbox
                  'flex items-center justify-between',
                )}>
                  <Label htmlFor="password" className={cn(
                    // Text Color
                    'text-slate-700',
                  )}>
                    Password
                  </Label>
                  <a href="#" className={cn(
                    // Text Size
                    'text-xs',
                    // Text Color
                    'text-primary hover:text-primary/80',
                    // Font Bold
                    'font-medium',
                  )}>
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    // Background Color
                    'bg-white',
                    // Input Style
                    'text-slate-900',
                    'py-5',
                    // Focus Style
                    'focus-visible:ring-red-200 focus-visible:ring-1',
                  )}
                  disabled={isLoading}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className={cn(
                  // Width Butto
                  'w-full p-5',
                  // Background Color
                  'bg-primary',
                  // Text Color
                  'text-white',
                  // Focus Style
                  'focus-visible:ring-red-300 focus-visible:ring-1',
                  // Rounded Button
                  'rounded-full',
                  // Cursor Type
                  'cursor-pointer',
                )}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              <div className={cn(
                // Text Align
                'text-center',
                // Text Size
                'text-sm',
                // Text Color
                'text-slate-500',
              )}>
                Don&apos;t have an account?{' '}
                <Link href="/register" className={cn(
                  // Font Semibold
                  'font-semibold',
                  // Text Color
                  'text-primary hover:text-primary/80',
                )}>
                  Register here
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
