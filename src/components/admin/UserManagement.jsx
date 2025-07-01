import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Trash2, User, KeyRound } from 'lucide-react';

const UserManagement = ({ users, addUser, deleteUser }) => {
  const { toast } = useToast();
  const [newUser, setNewUser] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.email || !newUser.password) {
      toast({ title: "Error", description: "Email dan password wajib diisi!", variant: "destructive" });
      return;
    }
    if (users.some(user => user.email === newUser.email)) {
      toast({ title: "Error", description: "Email sudah terdaftar!", variant: "destructive" });
      return;
    }
    addUser(newUser);
    setNewUser({ email: '', password: '' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Tambah Member Baru</h3>
        <form onSubmit={handleAddUser} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full">
            <Label htmlFor="email" className="text-white">Email Member</Label>
            <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="email" name="email" type="email" value={newUser.email} onChange={handleInputChange} placeholder="email@member.com" className="bg-gray-800 border-gray-600 text-white pl-10" />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="password" className="text-white">Password</Label>
             <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="password" name="password" type="password" value={newUser.password} onChange={handleInputChange} placeholder="••••••••" className="bg-gray-800 border-gray-600 text-white pl-10" />
            </div>
          </div>
          <Button type="submit" className="btn-gradient text-white border-0 w-full md:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Tambah
          </Button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Daftar Member</h3>
        <div className="bg-gray-800/50 rounded-lg">
          {users.length > 0 ? (
            <ul className="divide-y divide-gray-700">
              {users.map(user => (
                <li key={user.email} className="p-4 flex justify-between items-center">
                  <span className="text-white">{user.email}</span>
                  <Button variant="outline" size="icon" onClick={() => deleteUser(user.email)} className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center p-8">Belum ada member yang ditambahkan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;