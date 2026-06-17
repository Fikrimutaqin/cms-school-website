'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layers, Search, Eye, Edit2, CheckCircle2, AlertCircle, Plus } from 'lucide-react';
import { SchoolSection } from '@/types';
import { MOCK_SECTIONS } from '@/types/mockData';

export default function SectionPage() {
  const [search, setSearch] = useState('');

  const sections: SchoolSection[] = MOCK_SECTIONS;

  const filteredSections = sections.filter(sec => 
    sec.name.toLowerCase().includes(search.toLowerCase()) || 
    sec.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Layers className="h-8 w-8 text-primary" />
            Website Sections
          </h2>
          <p className="text-slate-500">Manage, organize, and toggle sections on your school&apos;s home page.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10">
          <Plus className="h-4 w-4 mr-2" />
          Create Section
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <Input
          placeholder="Search sections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus-visible:ring-primary"
        />
      </div>

      {/* Sections List */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredSections.map((section) => (
          <Card key={section.id} className="border-border bg-card shadow-sm flex flex-col justify-between">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-lg font-bold text-slate-900">{section.name}</CardTitle>
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  section.status === 'Active' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-250' 
                    : 'bg-amber-50 text-amber-700 border border-amber-250'
                }`}>
                  {section.status === 'Active' ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  {section.status}
                </span>
              </div>
              <CardDescription className="text-muted-foreground mt-2 text-sm">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xs text-muted-foreground">
                Last updated: {section.updated}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border bg-slate-50/50 p-4 flex justify-end gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-slate-900 hover:bg-slate-100">
                <Eye className="h-4 w-4 mr-1.5" />
                Preview
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-slate-100">
                <Edit2 className="h-4 w-4 mr-1.5" />
                Edit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
