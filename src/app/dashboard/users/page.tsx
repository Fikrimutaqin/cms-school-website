'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Search, UserPlus, UserCheck, ShieldAlert, Mail } from 'lucide-react';
import { UserAccount } from '@/types';
import { MOCK_USERS } from '@/types/mockData';

export default function UsersPage() {
  const [search, setSearch] = useState('');

  const usersList: UserAccount[] = MOCK_USERS;

  const filteredUsers = usersList.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.email.toLowerCase().includes(search.toLowerCase()) || 
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            User Management
          </h2>
          <p className="text-slate-500">View, invite, and configure permissions for administrative accounts.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/10">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite User
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <Input
          placeholder="Search users by name, email, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus-visible:ring-primary"
        />
      </div>

      {/* Users Card Container */}
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">Administrators</CardTitle>
          <CardDescription className="text-slate-500">Total of {filteredUsers.length} administrators found.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 border-t border-border">
          {/* Responsive list for mobile / Table for desktop */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm text-slate-700">
              <thead>
                <tr className="border-b border-border bg-slate-50/50 text-slate-500 font-medium">
                  <th className="p-4 pl-6">Name</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Last Active</th>
                  <th className="p-4 text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 pl-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">{user.name}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-slate-700">{user.role}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        user.status === 'Active' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-250' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {user.status === 'Active' ? (
                          <UserCheck className="h-3 w-3" />
                        ) : (
                          <ShieldAlert className="h-3 w-3" />
                        )}
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{user.lastActive}</td>
                    <td className="p-4 text-right pr-6">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-slate-900 hover:bg-slate-100">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
