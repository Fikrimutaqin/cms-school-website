'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { 
  TrendingUp, 
  Activity,
  Plus
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DASHBOARD_STATS, RECENT_ACTIVITIES } from '@/types/mockData';
import { StatItem, RecentActivityItem } from '@/types';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
          <p className="text-slate-500">Welcome back! Here is what is happening on your school website.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/news"
            className={cn(
              buttonVariants({ variant: 'default' }),
              "bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10 font-medium"
            )}
          >
            <Plus className="h-4 w-4 mr-2" />
            Publish News
          </Link>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat: StatItem) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="border-border bg-card shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Grid: Details and Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Overview Card */}
        <Card className="col-span-1 lg:col-span-2 border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Website Health & Analytics
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Overview of visitor metrics and performance of school portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex flex-col items-center justify-center text-center p-6 border-t border-border">
            <div className="rounded-full bg-red-50 p-4 border border-red-100 mb-4">
              <Activity className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <h4 className="font-semibold text-slate-900">All Systems Operational</h4>
            <p className="text-sm text-muted-foreground max-w-sm mt-1">
              Traffic has increased by 14% this month. Pages load fast, and all components are synced.
            </p>
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest administrative changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="divide-y divide-border border-t border-border">
            {RECENT_ACTIVITIES.map((activity: RecentActivityItem, idx: number) => (
              <div key={idx} className="py-4 first:pt-2 last:pb-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-900">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{activity.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
