'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Image as ImageIcon, Search, Download, Copy, Trash2, FileText, FileSpreadsheet, Film, Upload } from 'lucide-react';
import { MediaFile } from '@/types';
import { MOCK_MEDIA } from '@/types/mockData';

export default function MediaLibraryPage() {
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const mediaFiles: MediaFile[] = MOCK_MEDIA;

  const filteredFiles = mediaFiles.filter(file => 
    file.name.toLowerCase().includes(search.toLowerCase()) ||
    file.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopyLink = (file: MediaFile) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin + file.url);
      setCopiedId(file.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'image': return <ImageIcon className="h-10 w-10 text-emerald-600" />;
      case 'video': return <Film className="h-10 w-10 text-rose-600" />;
      case 'spreadsheet': return <FileSpreadsheet className="h-10 w-10 text-blue-600" />;
      default: return <FileText className="h-10 w-10 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <ImageIcon className="h-8 w-8 text-primary" />
            Media Library
          </h2>
          <p className="text-slate-500">Upload and manage images, videos, and document attachments.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <Input
          placeholder="Search files by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus-visible:ring-primary"
        />
      </div>

      {/* Media Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredFiles.map((file) => (
          <Card key={file.id} className="border-border bg-card shadow-sm flex flex-col justify-between overflow-hidden group">
            {/* Thumbnail preview area */}
            <div className="h-32 bg-slate-50 flex items-center justify-center border-b border-border relative">
              {getFileIcon(file.type)}
              <span className="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/80 text-slate-600 border border-slate-200">
                {file.type}
              </span>
            </div>
            
            <CardHeader className="p-3">
              <CardTitle className="text-sm font-bold text-slate-900 truncate" title={file.name}>
                {file.name}
              </CardTitle>
              <CardDescription className="text-[11px] text-muted-foreground flex justify-between mt-1">
                <span>{file.size}</span>
                <span>{file.date}</span>
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="border-t border-border bg-slate-50/50 p-2 flex justify-between gap-1">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-650 hover:bg-red-50 h-8 w-8 p-0">
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleCopyLink(file)}
                  className="text-muted-foreground hover:text-slate-900 hover:bg-slate-100 h-8 px-2 text-xs flex gap-1"
                >
                  <Copy className="h-3 w-3" />
                  {copiedId === file.id ? 'Copied' : 'Link'}
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-slate-100 h-8 px-2 text-xs flex gap-1">
                  <Download className="h-3 w-3" />
                  Get
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
