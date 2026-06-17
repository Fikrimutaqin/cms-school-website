import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className={cn(
        // Flex
        "flex",
        // Direction
        "flex-row",
        // Hide when collapsible
        "group-data-[collapsible=icon]:hidden",
        // Width
        "w-full",
      )}>
        <DashboardSidebar />
        <SidebarInset className={cn(
          // Flex
          "flex",
          // Direction
          "flex-col",
          // Hide when collapsible
          "group-data-[collapsible=icon]:hidden",
          // Background
          "bg-background",
          // Foreground
          "text-foreground",
        )}>
          {/* Header bar for sidebar toggle and navigation helper */}
          <header className={cn(
            // Flex
            "flex",
            // Height
            "h-16",
            // Shrink
            "shrink-0",
            // Alignment
            "items-center",
            // Gap
            "gap-2",
            // Border
            "border-b",
            "border-border",
            // Background
            "bg-slate-50/50",
            // Backdrop
            "backdrop-blur-sm",
            // Padding
            "px-6",
            // Sticky
            "sticky",
            "top-0",
            // Z-index
            "z-10",
            // Width
            "w-full",
          )}>
            <SidebarTrigger className={cn(
              // Text
              "text-muted-foreground",
              // Hover
              "hover:text-foreground",
            )} />
            <div className={cn(
              // Height
              "h-4",
              // Width
              "w-px",
              // Margin
              "mx-2",
            )} />

          </header>
          <div className={cn(
            // Flex
            "flex-1",
            // Padding
            "p-6",
            "md:p-8",
            // Space
            "space-y-6",
            // Overflow
            "overflow-y-auto",
          )}>
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
