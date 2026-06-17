'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Newspaper, Search, Eye, Edit2, Calendar, User, Trash2, Plus } from 'lucide-react';
import { NewsArticle } from '@/types';
import { MOCK_ARTICLES } from '@/types/mockData';

export default function NewsPage() {
  const [search, setSearch] = useState('');

  const articles: NewsArticle[] = MOCK_ARTICLES;

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(search.toLowerCase()) || 
    art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
    art.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-primary" />
            School News & Announcements
          </h2>
          <p className="text-slate-500">Manage blog posts, emergency updates, and official event coverage.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10">
          <Plus className="h-4 w-4 mr-2" />
          Write Article
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <Input
          placeholder="Search news by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus-visible:ring-primary"
        />
      </div>

      {/* News Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="border-border bg-card shadow-sm flex flex-col justify-between">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-primary border border-red-100">
                  {article.category}
                </span>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  article.status === 'Published' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-250' 
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}>
                  {article.status}
                </span>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 leading-snug hover:text-primary transition-colors">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 flex-1">
              <p className="text-muted-foreground text-sm line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </span>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border bg-slate-50/50 p-4 flex justify-between gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-650 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-slate-900 hover:bg-slate-100">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/85 hover:bg-slate-100">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
