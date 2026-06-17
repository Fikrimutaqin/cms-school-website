'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Save, Globe, Info, Bell, Shield } from 'lucide-react';

export default function SettingsPage() {
  const [schoolName, setSchoolName] = useState('St. Patrick Academic Academy');
  const [contactEmail, setContactEmail] = useState('info@stpatrick.edu');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('123 Education Way, Boston, MA');
  const [metaTitle, setMetaTitle] = useState('St. Patrick Academic Academy | Lead in Excellence');
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSaved(false);

    setTimeout(() => {
      setIsLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            System Settings
          </h2>
          <p className="text-slate-500">Configure global metadata, contact details, and core CMS options.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="grid gap-6 md:grid-cols-3">
        {/* Left column - General settings */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                General Information
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                School contact information shown in site headers and footers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="schoolName" className="text-slate-700">School Name</Label>
                <Input
                  id="schoolName"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-white border-slate-200 text-slate-900 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">Contact Phone</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white border-slate-200 text-slate-900 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-slate-700">School Address</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 focus-visible:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                SEO Configuration
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Manage how the school website appears in search engines like Google.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="metaTitle" className="text-slate-700">Default Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metaDesc" className="text-slate-700">Default Meta Description</Label>
                <textarea
                  id="metaDesc"
                  rows={3}
                  defaultValue="St. Patrick Academic Academy provides a rich educational curriculum for elementary, middle, and high school students, aiming for excellence in academics and character."
                  className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Side options */}
        <div className="space-y-6">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Email on news publish</span>
                <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span>New user registration alert</span>
                <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Public sign-up allowed</span>
                <input type="checkbox" className="accent-primary h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span>Enforce 2FA for Admins</span>
                <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          <div className="pt-2">
            {saved && (
              <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700">
                Settings saved successfully!
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/95 text-white font-medium shadow-lg shadow-primary/20"
              disabled={isLoading}
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Settings'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
